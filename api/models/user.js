const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  xWalletId: { type: String, required: true },
  seed: { type: String, required: true },
  address: { type: String, required: false }
})

const User = mongoose.model('User', userSchema)

module.exports = User
