// Import required packages
const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");
const bodyParser =require("body-parser");
require("dotenv").config({ path: "./config.env" });

const users = require("./routes/users.js");
const posts = require("./routes/posts.js");
const authRoutes = require("./routes/auth.js");



const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(
  bodyParser.urlencoded({
    limit: "30mb",
    extended: true,
  })
);
app.use(cors());

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
app.use("/api/comments", posts);
app.use("/api/users", users);





// Start the Express server
app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});


