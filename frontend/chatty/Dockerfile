# Use official Node.js image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the Vite development server port (default 5173)
EXPOSE 5174

# Start the frontend in development mode
CMD ["npm", "run", "dev", "--", "--host"]
