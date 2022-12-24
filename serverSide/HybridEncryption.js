const crypto = require('crypto')
const CryptoJS = require('crypto-js')

module.exports.decryptDataFromServer = async (req, res, next) => {
  try {
    if (!req.body.data) {
      throw Error('Invalid data supplied.')
    }

    if (!req.body.key) {
      throw Error('Invalid key supplied.')
    }

    const privateKey = process.env.clientPrivateKey
    const encryptedData = req.body.data
    const encryptedKey = req.body.key
    const buffer = Buffer.from(encryptedKey.toString(), 'base64')

    const decryptedAESKey = crypto
      .privateDecrypt(
        {
          key: privateKey,
          padding: crypto.constants.RSA_PKCS1_PADDING
        },
        buffer
      )
      .toString()

    const bytes = CryptoJS.AES.decrypt(encryptedData, decryptedAESKey)
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8)

    res.status(200).json(JSON.parse(decryptedData))
    next()
  } catch (err) {
    console.log(err.message)
    next(new Error('Invalid key or data provided.'))
  }
}