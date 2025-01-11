# Use a Node.js base image
FROM node:20.14 AS dev

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire app to the working directory
COPY . .

# Expose Vite's default development server port
EXPOSE 5173

# Set environment variables for development
ENV NODE_ENV=development

# Start Vite in development mode
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
