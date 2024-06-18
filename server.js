require("dotenv").config(); 
const express = require("express"); 
const axios = require("axios"); 
const PORT = process.env.PORT; 
const path = require('path');


const app = express(); 

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`App working on http://localhost:${PORT}`)
})
