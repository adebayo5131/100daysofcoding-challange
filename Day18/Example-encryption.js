// Encrypting 
var crypto = require('crypto-js');

var secretMessage = 
{
    name: 'Adebayo Ajagunna Edward',
    secretKeyName: ' 491'
}
var secretKey ='123aaa';

//encrypting

//coverting object to string using Json stringify

var EncryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), secretKey);

console.log('Encypted Messge: ' + EncryptedMessage +'\n');




// Decrypting a Message

var bytes = crypto.AES.decrypt(EncryptedMessage,secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

 console.log(decryptedMessage)
console.log(decryptedMessage.secretKeyName);
