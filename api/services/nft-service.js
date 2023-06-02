const nftRepository = require('../repositories/nft-repository')

async function registerNFT (token, title, description, price, seller) {
  const nftData = { token, title, description, price, seller }
  return nftRepository.registerNFT(nftData)
}

async function getAvailableNFTs () {
  return nftRepository.getAvailableNFTs()
}

async function purchaseNFT (nftId) {
  const nft = await nftRepository.getNFTById(nftId)
  if (!nft) {
    throw new Error('NFT not found')
  }
  if (nft.sold) {
    throw new Error('NFT is already sold')
  }

  await nftRepository.updateNFTStatus(nftId, true)
  return nft
}

module.exports = {
  registerNFT,
  getAvailableNFTs,
  purchaseNFT
}
