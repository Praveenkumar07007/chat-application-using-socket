const app = require('express')();

const server = require('http').createServer(app);

const io = require('socket.io')(server,{
  cors:{
    origin: "*", // allow all origins
    methods: ["GET","POST"]
  }
});

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.on("chat", (payload) => {
    console.log("what is payload", payload);
    io.emit("chat", payload);
  });
});

// app.listen(5000,()=>{
//   console.log("Server is running on port 5000")
// })

server.listen(5000, () => {
  console.log("Server is running on port 5000...");
});
