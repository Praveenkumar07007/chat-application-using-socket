# Chatty - A Real-time Chat Application

Chatty is a real-time chat application built with React, Vite, Tailwind CSS, Express, and Socket.IO. This application allows users to send and receive messages in real-time.

## Features

- Real-time messaging using Socket.IO
- Responsive design with Tailwind CSS
- Unique message IDs using NanoID

## Project Structure
backend/ .gitignore package.json server.js frontend/ chatty/ .gitignore eslint.config.js index.html package.json postcss.config.js public/ README.md src/ App.css App.jsx assets/ components/ ChatApp.jsx index.css main.jsx tailwind.config.js vite.config.js

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/chatty.git
cd chatty

2. Install dependencies for the backend:
cd backend
npm install

3. Install dependencies for the frontend:
cd ../frontend/chatty
npm install

### Running the application

1.Start the backend server:
cd backend
npm start

2. Start the frontend development server:
cd ../frontend/chatty
npm run dev

3. Open your browser and navigate to http://localhost:3000 to see the application in action.

##Usage
Enter your message in the input field and click "Send" to send a message.
Messages will be displayed in the chat area in real-time.

###Configuration
Backend
The backend server is implemented using Express and Socket.IO. The server listens on port 5000 and handles real-time communication with clients.

Frontend
The frontend is built with React and Vite. Tailwind CSS is used for styling, and Socket.IO is used for real-time communication.

License
This project is licensed under the MIT License. See the LICENSE file for details.

###Acknowledgements
React
Vite
Tailwind CSS
Express
Socket.IO
NanoID
