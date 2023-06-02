const mongoose = require('mongoose')

const nftSchema = new mongoose.Schema({
  token: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  sold: { type: Boolean, default: false }
})

const NFT = mongoose.model('NFT', nftSchema)

module.exports = NFT
