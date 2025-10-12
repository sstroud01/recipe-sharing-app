# Build stage
FROM node:18-alpine AS build

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# Copy all application files
COPY . .

# Build the production app
RUN npm run build

# Serve stage (multi-stage build)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
