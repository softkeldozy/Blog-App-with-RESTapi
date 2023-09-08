const express = require('express')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const multer = require('multer');


const app = express();
dotenv.config();
// Enabling the app to send onjects in json format
app.use(express.json());

/******************
Database Connection
********************/
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

/*************************************************************
 * $$$$$$$$$$$$$$$$$$$$$ M U L T E R $$$$$$$$$$$$$$$$$$$$$$$$
**************************************************************/
/*******************
Storing Image
********************/
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
/******************* 
Uploading Image
********************/
const upload = multer({ storage: storage });
// Uploading just one image,hence single method
app.post('/api/uploads/', upload.single('file'), (req, res) => {
  res.status(200).json('File Upload Successful');
});
/*************************************************************
 * $$$$$$$$$$$$$$$$$$$$$ M U L T E R $$$$$$$$$$$$$$$$$$$$$$$$
**************************************************************/

/******************
Routing
********************/
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);

// Port Listening
const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));