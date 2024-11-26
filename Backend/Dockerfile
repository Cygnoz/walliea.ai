# Use the official Python base image
FROM python:3.11-slim

# Set the working directory in the container
WORKDIR /app

# Install system dependencies first
RUN apt-get update && apt-get install -y \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Create a virtual environment
RUN python -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

# Copy only the requirements file first
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Install additional packages
RUN pip install --no-cache-dir \
    gunicorn \
    langchain-openai

# Copy the rest of the application files
# Use .dockerignore to filter out unnecessary files
COPY . .

# Expose the port for your backend
EXPOSE 5001

# Set the environment variable to indicate production mode
ENV FLASK_ENV=production

# Command to run the app with Gunicorn in production
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5001", "wall_main:app"]