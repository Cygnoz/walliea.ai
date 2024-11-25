# Use the official Python base image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container
COPY . /app

# Install the necessary dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Install langchain-openai package to fix the deprecation warning
RUN pip install -U langchain-openai

# Expose the port for your backend
EXPOSE 5001

# Set the environment variable to indicate production mode (optional)
ENV FLASK_ENV=production

# Install Gunicorn to run the app in production
RUN pip install gunicorn

# Command to run the app with Gunicorn in production
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5001", "wall_main:app"]
