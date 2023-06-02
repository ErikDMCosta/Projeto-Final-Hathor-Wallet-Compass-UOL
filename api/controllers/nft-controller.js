/* eslint-disable eqeqeq */
const nftService = require('../services/nft-service')
const { getUserByWalletId } = require('../repositories/user-repository')
const { payNFT, transferNFT, getAddress } = require('../services/headless-wallet-service')
const { getNFTById } = require('../repositories/nft-repository')

async function registerNFT (req, res) {
  try {
    const { token, title, description, price, xWalletId } = req.body
    const seller = await getUserByWalletId(xWalletId)
    await nftService.registerNFT(token, title, description, price, seller)
    res.status(201).json({ message: 'NFT created successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function getAvailableNFTs (req, res) {
  try {
    const nfts = await nftService.getAvailableNFTs()
    res.json(nfts)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function purchaseNFT (req, res) {
  try {
    const { nftId, xWalletId } = req.body

    const nft = await getNFTById(nftId)
    if (!nft) {
      throw new Error('NFT not found')
    }
    const sellerAddress = nft.seller.address
    const sellerWalletId = nft.seller.xWalletId
    const payment = await payNFT(xWalletId, { address: sellerAddress, value: nft.price })

    if (payment.success == 'true') {
      const result = await getAddress(xWalletId)
      const address = result.address
      const transfer = await transferNFT(sellerWalletId, { address, value: 1, token: nft.token })
      if (transfer.success == 'true') {
        const purchase = await nftService.purchaseNFT(nftId)
        if (purchase.success == 'true') {
          res.status(500).json({ emessage: 'Error in purchase', error: purchase.error })
        }
      } else {
        res.status(500).json({ emessage: 'Error in transfer', error: transfer.error })
      }
    } else {
      res.status(500).json({ message: 'Error in payment', error: payment.error })
    }

    res.status(200).json({ message: 'NFT purshed successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  registerNFT,
  getAvailableNFTs,
  purchaseNFT
}
