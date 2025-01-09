/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import {useState , useEffect} from "react";
import io  from "socket.io-client";
import {nanoid} from "nanoid";

const socket = io.connect("http://localhost:5000");


const ChatApp = () => {
  const [messages, setMessages] = useState('');
  const [chat , setChat] = useState([]);

  const sendChat = (e) => {
    e.preventDefault();
    const id = nanoid();
    socket.emit("chat" , {id , messages});
    setMessages('');
  };

  useEffect(() => {
    socket.on("chat" , (payload) => {
      setChat([...chat , payload]);
    });
  }, [chat]);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 px-6 text-lg font-semibold shadow-md">
        Chat Application
      </header>

      {/* Chat Messages */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4">
      {chat.map((payload, index) => {
  return (
    <div key={index} className="flex w-full items-start m-2">
      {/* Conditionally render message background color based on sender */}
      <div
        className={`p-2 rounded-lg max-w-xs ${
          payload.isSender ? 'bg-blue-600 text-white ml-auto' : 'bg-gray-300 text-gray-800'
        }`}
      >
        {payload.messages}
      </div>
    </div>
  );
})}
      </main>

      {/* Input Section */}
      <footer className="bg-white p-4 border-t border-gray-300">
        <form onSubmit={sendChat} className="flex w-full items-center">
          <input
            type="text"
            value={messages}
            onChange={(e) => setMessages(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message..."
          />
          <button
            className="ml-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            type="submit"
          >
            Send
          </button>
        </form>
      </footer>
    </div>
  );
};

export default ChatApp;
