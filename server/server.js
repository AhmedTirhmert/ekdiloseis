// IMPORTS
const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const connectDB = require("./database/connection");
const { errorHandler } = require("./middleware/errorMiddleware");
// SERVER CONFIGURATION
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// VARIABLES

// FUNCTIONS
const init = async () => {
  connectDB();
};

// ROUTUNG
app.use('/api/users',require('./routes/userRoutes'))

// ERROR HANDELLING
app.use(errorHandler);


//STARTING SERVER
app.listen(PORT, async () => {
  await init();
});
