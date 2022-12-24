const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json())

require('dotenv').config();
const HybridEncryption = require('./HybridEncryption')

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

async function index() {
  // request data
  let requestObj = {
    "email": "anilpatel01@yopmail.com",
    "password": "anilpatel01",
    "confirm_password": "anilpatel01",
    "device": "android"
  }

  // generate AES string which will be used to encrypt data by symmetric encryption
  let aesString = await HybridEncryption.generateAESString()
  console.log("aesString---->",aesString)

  // data encryption by symmetric encryption using AES string
  let encryptedData = await HybridEncryption.encryptDataUsingAESString(aesString, requestObj)
  console.log("encryptedData---->",encryptedData)

  // generating asymmetric key on aes string
  let generatedAsymmetricKey = await HybridEncryption.generateAsymmetricKey(aesString)
  console.log("generatedAsymmetricKey---->",generatedAsymmetricKey)
}

index()