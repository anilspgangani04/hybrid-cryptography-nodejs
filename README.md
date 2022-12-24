# Hybrid Cryptography Example

## What is Hybrid Cryptography?
This project's source code combines symmetric and asymmetrical encryption. This process is referred to as hybrid cryptography.

This paradigm is helpful if we need to encrypt data during client-server communication. The NodeJS rest-api and mobile/web applications will communicate using encryption. We can therefore see that the data they are sending to one another is encrypted.

## How to run this example project?
### There are two subdirectory clientSide & serverSide. You need to go first client & then server as mentioned below.

### clientSide
Run below command and get values for aesString, encryptedData and generatedAsymmetricKey
```bash
cd clientSide
npm install
cp .env.example .env
node index.js
```
this will return something like below
```bash
aesString----> TYhxnZ4F6kbmQJ2hFXHvzWrMjFQaFrO6pGvFHuW/HLc=

encryptedData----> U2FsdGVkX1/zrOE2MVtf/VzmdstCS4itQh3EFRvLTHmxwnPaMSkqJU2rnUAhZAVX9LlEX0X04oVktAqRIpHbon5r3dumO2kz7D/d6NDrtmEQZxJH3Qh9FQ50tBJPoOOb861+2F+tLOP5fFnetp7t36hpC5s9doaZNo5ighqz0RnyTI8QNuWDzU87Ht5KLeXG

generatedAsymmetricKey----> L3m4+raJwXZPXKFoNHt0RtxVJWiEC7uxJJWovrKy+21paLN3TfEB1OtLzzntCLoXVMcKYL8Ey5YpVw37dS0x9ooUFPvPAOZMVhM/v4V2bUkO6prdU06J6Im+QCQplBNAhMm77404r0YA9uHyM/yCVM78hp8A35VKjxsjojEHGM8=
```
### serverSide
```bash
cd serverSide
npm install
cp .env.example .env
node index.js
```
The server will now launch. You must use the post method to make an api call to http://localhost:3000/decryptDataFromServer with body json data as the key & data. Think about the data from encryptedData and the key parameter value from generatedAsymmetricKey.

## Notes
- In this example, I only covered the part of what client sends data to server and how server decrypt that data only. Vice versa technique can be helpful to send encrypted data from server to client and client can decrypt those data.
- Attached diagram image(diagram-image.png) for exiting method.