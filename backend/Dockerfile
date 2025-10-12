# Use Node.js base image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# Copy all application files
COPY . .

# Create a directory for the database
RUN mkdir -p /app/data

# Expose port 5000
EXPOSE 5000

# Start the backend application
CMD ["npm", "start"]
