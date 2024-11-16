# Build stage
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Add debug commands to see what's happening
RUN npm run build && \
    echo "Listing build directory contents:" && \
    ls -la && \
    echo "Listing dist directory contents:" && \
    ls -la dist/

# Production stage
FROM nginx:alpine

# Copy the built files from the previous stage - using dist instead of build
COPY --from=build /app/dist/ /usr/share/nginx/html/

# Copy custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 5173
EXPOSE 5173

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]