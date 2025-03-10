from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain_openai import OpenAIEmbeddings
from langchain.text_splitter import CharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_openai import OpenAIEmbeddings
from langchain_openai.llms import OpenAI
from langchain_openai import OpenAI, ChatOpenAI
import mimetypes
import os
import requests
import json
from bson import json_util
from bs4 import BeautifulSoup
import re
from datetime import datetime
from langchain.chains import RetrievalQA
from openai import OpenAI
from marshmallow import Schema, fields, ValidationError
from pymongo import MongoClient
import logging
# from pymongo import json_util
from dotenv import load_dotenv
from urllib.parse import quote_plus
import warnings # Suppress all warningswarnings.filterwarnings("ignore")

warnings.filterwarnings("ignore")
 
# Define the Registration Schema
class RegistrationSchema(Schema):
 
    fullname = fields.Str(required=True)
    phone_no = fields.Str(required=True)
    company_name = fields.Str(required=True)
    email = fields.Email(required=True)
 
class BannerSchema(Schema):
   
    title = fields.Str(required=True)
    subtitle = fields.Str(required=True)
    image = fields.Str(required=True)
    url = fields.Str(required=True)
 
app = Flask(__name__)
# CORS(app, resources={r"/*": {"origins":"https://www.walliea.ai"}})
CORS(app)
 
load_dotenv()

username = os.getenv("MONGODB_USERNAME")
password = os.getenv("MONGODB_PASSWORD")
 
# URL-encode username and password
encoded_username = quote_plus(username)
encoded_password = quote_plus(password)
 
# MongoDB connection string
mongodb_uri = f"mongodb+srv://{encoded_username}:{encoded_password}@cluster0.rdzev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Load environment variables from .env file
load_dotenv()

# # MongoDB credentials
# username = os.getenv("MONGODB_USERNAME")
# password = os.getenv("MONGODB_PASSWORD")
# uri_template = os.getenv("MONGODB_URI_TEMPLATE")

# # URL-encode username and password
# encoded_username = quote_plus(username)
# encoded_password = quote_plus(password)

# # MongoDB connection string
# mongodb_uri = uri_template.format(username=encoded_username, password=encoded_password)


try:
    client = MongoClient(mongodb_uri)
    db = client.get_database('test')
    app.config['db'] = db
    register_collection = db.get_collection('registerSchema')
    banner_collection = db.get_collection('banners')
    logging.info("Connected to MongoDB")
except Exception as e:
    logging.error(f"Failed to connect to MongoDB: {str(e)}")
 
# load_dotenv()
os.environ["OPENAI_API_KEY"] = "my_openai_api_key"
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
 
  
website_urls = [
    "https://wallmarkply.com/",
    "https://wallmarkply.com/blog/",
    "https://wallmarkply.com/contact/",
    "https://wallmarkply.com/wpc-board/",
    "https://wallmarkply.com/our-range-of-products/",
    "https://wallmarkply.com/pvc-board/",
    "https://wallmarkply.com/particle-board/",
    "https://wallmarkply.com/about-us/",
    "https://wallmarkply.com/plywood/",
    "https://wallmarkply.com/mdf/",
    "https://wallmarkply.com/veneers/",
    "https://wallmarkply.com/wallmark-ply-stands-out-at-india-woods-a-fusion-of-innovation-and-excellence/",
    "https://wallmarkply.com/celebrating-exemplary-business-leadership-award-for-best-plywood-brand-in-kerala/",
    "https://wallmarkply.com/wallmark-ply-shines-in-vanitha-magazine/",
    "https://wallmarkply.com/discover-wallmark-ply-our-story-in-motion/",
    "https://wallmarkply.com/the-role-of-quality-doors-in-modern-architecture/",
    "https://wallmarkply.com/wallmark-ply-wins-prestigious-times-business-award-for-trusted-preferred-brand/",
    "https://wallmarkply.com/author/wall_mark_sup_admin/",
    "https://wallmarkply.com/category/blog/",
    "https://wallmarkply.com/plywood-vs-multiwood-a-complete-guide-for-smart-buyers/"
    "https://wallmarkply.com/wallmark-platinum-premium-advanced-manufacturing-for-superior-quality/"  
]

 
# hardcoded contact details
CONTACT_DETAILS = """
Wallmark Ply Pvt Ltd.
Address: Odakkaly, Perumbavoor,
         Asamannoor P.O, Ernakulam Dist., kerala, India
Phone: +91 97 4491 2617
       +91 75 9494 1057
       +91 81 2962 724
Email: info@wallmarkply.com
"""
 
def scrape_data():
    raw_text = ''
    for url in website_urls:  # Load URLs from the imported list
        try:
            response = requests.get(url)
            response.raise_for_status()  # Raises an error for bad status codes
            content_type = response.headers.get("Content-Type", "")
            if "xml" in content_type or mimetypes.guess_type(url)[0] == "application/xml":
                soup = BeautifulSoup(response.content, 'lxml-xml') # Use XML parser
            else:
                soup = BeautifulSoup(response.content, 'html.parser')  # Use HTML parser
            for paragraph in soup.find_all(['p', 'h1', 'h2', 'h3']):
                raw_text += paragraph.get_text() + "\n"
        except requests.exceptions.RequestException as e:
            print(f"Failed to retrieve {url}: {str(e)}")  # Log failure, continue to next URL
    return raw_text
 
# Scrape data from websites
raw_text = scrape_data()
 
# Split the text to avoid token size issues
text_splitter = CharacterTextSplitter(separator="\n", chunk_size=800, chunk_overlap=200, length_function=len)
texts = text_splitter.split_text(raw_text)
 
# Download embeddings from OpenAI
embeddings = OpenAIEmbeddings(api_key=os.getenv("OPENAI_API_KEY"))
document_search = FAISS.from_texts(texts, embeddings)
chain = RetrievalQA.from_chain_type(
    llm=ChatOpenAI(model="gpt-3.5-turbo", temperature=0),
    retriever=document_search.as_retriever(),
    chain_type="stuff"
)
 
 
def get_openai_response(prompt, context=None):
    try:
        messages = [{"role": "system", "content": context}] if context else []
        messages.append({"role": "user", "content": prompt})
 
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=messages,
            max_tokens=200
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        return f"OpenAI Error: {str(e)}"
 
def is_calculation_question(question):
    math_keywords = ['calculate', 'sum', 'add', 'subtract', 'multiply', 'divide', 'total', 'average', 'mean', 'difference']
    math_symbols = re.search(r'[0-9\+\-\*/]', question)
    
    if any(keyword in question.lower() for keyword in math_keywords) or math_symbols:
        return True
    return False
 
# Function to check if the question is about contact details or address
def is_contact_or_location_question(question):
    contact_keywords = ['contact', 'phone', 'email', 'address', 'location', 'where', 'reach']
    if any(keyword in question.lower() for keyword in contact_keywords):
        return True
    return False
 
# Store chats with timestamps
chat_history = []
conversation_context = ""
 
@app.route('/chat', methods=['POST'])
def chat():
    global conversation_context
    user_input = request.json['message']
    bot_response = ""
    # Handling greetings with OpenAI
    greeting_response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are an assistant that determines if a user input is a greeting and responds accordingly."},
            {"role": "user", "content": f"Is the following a greeting? '{user_input}'"}
        ],
        max_tokens=50,
        temperature=0
    )
    
    is_greeting = greeting_response.choices[0].message.content.strip().lower()
 
    if "yes" in is_greeting:
        bot_response = "Hello! Welcome to Wallmark Ply, how can I assist you today?"
    elif user_input.lower() in ["wallmark", "wall mark"]:
        bot_response = "Wallmark Ply is a trusted and preferred brand of high-quality plywood that has won the prestigious Times Business Award. Powered by Cygnotech Labs, it is known for its passion for producing top-notch plywood products."
    elif user_input.lower() in ["bye", "thank you", "thanks"]:
        bot_response = "Goodbye, and have a great day ahead!"
    elif is_contact_or_location_question(user_input):  # Check if the user asks for contact details
        bot_response = CONTACT_DETAILS  # Provide hardcoded contact details
    else:
        question = user_input.strip()
        if len(question) < 4:
            bot_response = "Please enter a valid question!"
        else:
            if is_calculation_question(question):
                # Use GPT-3.5 for calculation-related questions
                bot_response = get_openai_response(user_input, context=conversation_context)
            else:
                # Check if user is asking about a previous conversation
                if "earlier" in user_input.lower() or "previous" in user_input.lower():
                    relevant_history = ""
                    for entry in chat_history:
                        if any(word in entry['user'].lower() for word in ["wallmark", "plywood", "veneers"]):
                            relevant_history += f"{entry['user']} - {entry['bot']}\n"
                    if relevant_history:
                        bot_response = f"Here's what we discussed earlier:\n{relevant_history}"
                    else:
                        bot_response = "Sorry, I couldn't find anything relevant from earlier conversations."
                else:
                    docs = document_search.similarity_search(user_input)
                    if docs:
                        # Replace chain.run() with invoke()
                        kb_response = chain.invoke({"query": question, "input_documents": docs})["result"]
                        kb_response = kb_response.replace("Based on the provided context, ", "").strip()
                        kb_response = kb_response.replace("According to the information, ", "").strip()
                        bot_response = kb_response
                    else:
                        bot_response = "Sorry, I couldn't find relevant information from our database."
 
    # Store the conversation with timestamps (only internally, not displayed)
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    chat_history.append({"user": user_input, "bot": bot_response, "timestamp": timestamp})
    
    # Update conversation context for follow-up questions
    conversation_context += f"User: {user_input}\nWallya: {bot_response}\n"
 
    return jsonify({"response": bot_response})
 
@app.route('/new_chat', methods=['POST'])
def new_chat():
    global chat_history, conversation_context
    chat_history = []
    conversation_context = ""
    return jsonify({"message": "New chat started"})
 
@app.route('/register', methods=['POST'])
def register():
    try:
        # Get the JSON data from the request
        data = request.get_json()
       
        # Validate the input data using the schema
        schema = RegistrationSchema()
        validated_data = schema.load(data)
       
        # Insert into MongoDB
        result = register_collection.insert_one(validated_data)
       
        # Return success response
        return jsonify({
            "message": "Registration successful",
            "user_id": str(result.inserted_id),
            "data": schema.dump(validated_data)
        }), 201
       
    except ValidationError as err:
        return jsonify({"error": "Validation error", "details": err.messages}), 400
    except Exception as e:
        return jsonify({"error": "Server error", "details": str(e)}), 500
   
@app.route('/users', methods=['GET'])
def get_all_users():
    try:
        users = register_collection.find({}, {
        })
       
        # Convert users to list and parse ObjectId
        users_list = json.loads(json_util.dumps(list(users)))
       
        return jsonify(users_list), 200
       
    except Exception as e:
        return jsonify({"error": "Server error", "details": str(e)}), 500
   
@app.route('/banners', methods=['GET'])
def get_all_banners():
    try:
        banner = banner_collection.find({}, {
        })
       
        # Convert users to list and parse ObjectId
        banners = json.loads(json_util.dumps(list(banner)))
       
        return jsonify(banners), 200
       
    except Exception as e:
        return jsonify({"error": "Server error", "details": str(e)}), 500
    
@app.route('/')
def hello_world():
    print("Hello, World!")
    return jsonify({"message": "Hello, World!"})
    


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5001, debug=True)
