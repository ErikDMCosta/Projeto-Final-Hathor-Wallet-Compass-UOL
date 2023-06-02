const fetch = require('cross-fetch')
require('dotenv').config()

const { HEADLESS_WALLET_API_URL } = process.env

async function startWallet (payload) {
  try {
    const requestUrl = `${HEADLESS_WALLET_API_URL}/start`
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }

    const response = await fetch(requestUrl, config)
    const result = await response.json()

    return result
  } catch (error) {
    console.log(error)
    throw new Error('Error starting wallet')
  }
}

async function stopWallet (xWalletId) {
  try {
    const requestUrl = `${HEADLESS_WALLET_API_URL}/wallet/stop`
    const config = {
      method: 'POST',
      headers: { 'x-wallet-id': xWalletId, 'Content-Type': 'application/json' }
    }

    const response = await fetch(requestUrl, config)
    const result = await response.json()

    return result
  } catch (error) {
    throw new Error('Error stoping wallet')
  }
}

async function getBalance (xWalletId) {
  try {
    const requestUrl = `${HEADLESS_WALLET_API_URL}/wallet/balance`
    const config = {
      method: 'GET',
      headers: { 'x-wallet-id': xWalletId, 'Content-Type': 'application/json' }
    }
    const response = await fetch(requestUrl, config)
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
    throw new Error('Error getting balance')
  }
}

async function getAddress (xWalletId) {
  try {
    const requestUrl = `${HEADLESS_WALLET_API_URL}/wallet/address`
    const config = {
      method: 'GET',
      headers: { 'x-wallet-id': xWalletId, 'Content-Type': 'application/json' }
    }
    const response = await fetch(requestUrl, config)
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
    throw new Error('Error getting address')
  }
}

async function payNFT (xWalletId, payload) {
  try {
    const requestUrl = `${HEADLESS_WALLET_API_URL}/wallet/simple-send-tx`
    const config = {
      method: 'POST',
      headers: { 'x-wallet-id': xWalletId, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }
    const response = await fetch(requestUrl, config)
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
    throw new Error('Error transferring payment')
  }
}

async function transferNFT (token, payload) {
  try {
    const requestUrl = `${HEADLESS_WALLET_API_URL}/wallet/simple-send-tx`
    const config = {
      method: 'POST',
      headers: { 'x-Wallet-id': token, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }
    const response = await fetch(requestUrl, config)
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
    throw new Error('Error transferring NFT')
  }
}

module.exports = {
  startWallet,
  stopWallet,
  getBalance,
  getAddress,
  payNFT,
  transferNFT
}
