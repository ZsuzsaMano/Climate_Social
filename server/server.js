// Import required packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser =require("body-parser");
require("dotenv").config({ path: "./config.env" });

const users = require("./routes/users.js");
const posts = require("./routes/posts.js");
const authRoutes = require("./routes/auth.js");
const { ConfigurePassport } = require("./utils/auth.js");



const app = express();

// Middleware configuration
// parsing JSON and URL-encoded request bodies
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(
  bodyParser.urlencoded({
    limit: "30mb",
    extended: true,
  })
);

//enabling Cross-Origin Resource Sharing
app.use(cors());

//set up Passport for authentication
ConfigurePassport()

const port = process.env.PORT || 5000;

//the MongoDB Atlas connection string
const connectionString = process.env.ATLAS_URI;
  
// Connects to the MongoDB database using Mongoose
mongoose
  .connect(connectionString, {})
  .then(() => {
    console.log("connection sucessful");
  })
  .catch((err) => {
    console.error("Connection error", err);
  });

// Associates route paths with their respective route handler modules.
app.use("/api", authRoutes);
app.use("/api/comments", posts);
app.use("/api/users", users);


// Starts the Express server and listens for incoming HTTP requests on the specified port.
app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});


