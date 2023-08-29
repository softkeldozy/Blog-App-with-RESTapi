const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')


const app = express()
dotenv.config()

// Connect to mongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }
}
connectDB();


// Port Listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));