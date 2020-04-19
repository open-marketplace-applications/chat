/* eslint-disable */

const crypto = require('crypto')
const IV_LENGTH = 16 // For AES, this is always 16

export default {
  encrypt(key, buf) {
    if (key.length !== 32) {
      throw new TypeError('Key needs to be 32 bytes in length!')
    }
    const iv = crypto.randomBytes(IV_LENGTH)
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv)
    const encrypted = cipher.update(buf)
    return Buffer.concat([iv, encrypted, cipher.final()])
  },
  decrypt(key, encrypted) {
    if (key.length !== 32) {
      throw new TypeError('Key needs to be 32 bytes in length!')
    }
    const iv = encrypted.slice(0, IV_LENGTH)
    const encryptedText = encrypted.slice(IV_LENGTH, encrypted.length)
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv)
    const decrypted = decipher.update(encryptedText)
    return Buffer.concat([decrypted, decipher.final()])
  }
}
