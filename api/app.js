const express = require('express')
const userController = require('./controllers/user-controller')
const nftController = require('./controllers/nft-controller')
const app = express()

app.use(express.json())

app.post('/register', userController.registerUser)
app.post('/login', userController.loginUser)

app.post('/nfts', nftController.registerNFT)
app.get('/nfts', nftController.getAvailableNFTs)
app.post('/nfts/purchase/', nftController.purchaseNFT)

module.exports = app
