const NFT = require('../models/nft')

async function registerNFT (nftData) {
  return NFT.create(nftData)
}

async function getAvailableNFTs () {
  return NFT.find({ sold: false }).populate('seller', 'address')
}

async function updateNFTStatus (nftId, sold) {
  return NFT.findByIdAndUpdate(nftId, { sold })
}

function getNFTById (nftId) {
  return NFT.findById(nftId).populate('seller', 'address')
}

module.exports = {
  registerNFT,
  getAvailableNFTs,
  updateNFTStatus,
  getNFTById
}
