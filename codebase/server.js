const express = require('express');
const mongoose = require('mongoose');
const cors= require("cors")
const UserModel= require('./models/User')


const app = express();
app.use(express.json())
const port = 4000;

// MongoDB connection URI (replace with your own URI)
const dbURI = 'mongodb://localhost:27017/Negus';

// Connect to MongoDB
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check for successful connection
const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

// Define routes or other middleware here...
app.get('/signup', (req, res) => {
  UserModel.create(req.body)
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(4000, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
