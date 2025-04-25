# Use an official Node.js image as the base image
FROM node:20-alpine 

# Set the working directory in the container
WORKDIR /app/client

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose port 3000 (default port for React)
EXPOSE 3000

# Start the React application
CMD ["npm", "run", "dev"]