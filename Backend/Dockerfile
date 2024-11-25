FROM python:3.11-slim

WORKDIR /app

# Install system dependencies including lxml
RUN apt-get update && apt-get install -y \
    python3-full \
    build-essential \
    libxml2-dev \
    libxslt1-dev \
    && rm -rf /var/lib/apt/lists/*

# Create and activate virtual environment
RUN python -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

# Copy requirements first to leverage Docker cache
COPY requirements.txt .

# Install dependencies in the virtual environment
RUN pip install --no-cache-dir -r requirements.txt

# Install lxml separately if needed
RUN pip install lxml

# Copy the rest of your application
COPY . .

# Expose the application port
EXPOSE 5001

# Run the application
CMD ["python", "wall_main.py"]
