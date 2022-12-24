const express = require('express')
const app = express()
const bodyParser = require('body-parser');

// parse application/json
app.use(bodyParser.json())

require('dotenv').config();
const HybridEncryption = require('./HybridEncryption')

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.post('/decryptDataFromServer', HybridEncryption.decryptDataFromServer)

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
	console.log('Listening to port ',PORT);
})