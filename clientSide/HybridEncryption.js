const crypto = require('crypto')
const CryptoJS = require('crypto-js')

module.exports.generateAESString = async () => {
  try {
    return crypto.randomBytes(32).toString('base64')
  }
  catch (err) {
    console.log("error while generating generateAESString")
    console.log(err.message)
  }
}

module.exports.encryptDataUsingAESString = async (AESKey, data) => {
  try {
    return CryptoJS.AES.encrypt(JSON.stringify(data), AESKey).toString()
  }
  catch (err) {
    console.log("error while encryptDataUsingAESString")
    console.log(err.message)
  }
}

module.exports.generateAsymmetricKey = async (AESKey) => {
  try {
    const publicKey = process.env.clientPublicKey
    const buffer = Buffer.from(AESKey)
    const encrypted = crypto.publicEncrypt(
      {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_PADDING
      },
      buffer
    )

    return encrypted.toString('base64')
  }
  catch (err) {
    console.log("error while generating generateAsymmetricKey")
    console.log(err.message)
  }
}