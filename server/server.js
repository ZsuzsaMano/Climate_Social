// Import required packages
const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

const users = require("./routes/users.js");
const posts = require("./routes/posts.js");
const authRoutes = require("./routes/auth.js");


const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const port = process.env.PORT || 5000;

// In the MongoDB Atlas connection string. Replace '<password>' with your actual password
const connectionString = process.env.ATLAS_URI;
  
// Connect to MongoDB Atlas
mongoose
  .connect(connectionString, {})
  .then(() => {
    console.log("connection sucessful");
  })
  .catch((err) => {
    console.error("Connection error", err);
  });

// Routes
app.use("/api", authRoutes);
app.use("/api/posts", posts);
app.use("/api/users", users);


// Handle socket events
io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('post', (data) => {
    console.log('Message received:', data);
    io.emit('post', data);
  });
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});


// Start the Express server
app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});


