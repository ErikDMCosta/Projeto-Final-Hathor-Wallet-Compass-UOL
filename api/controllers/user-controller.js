const userService = require('../services/user-service')
const { startWallet } = require('../services/headless-wallet-service')

async function registerUser (req, res) {
  try {
    const { xWalletId, seed } = req.body
    await userService.registerUser(xWalletId, seed)
    res.status(201).json({ message: 'User registered successfully' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

async function loginUser (req, res) {
  try {
    const { xWalletId, seed } = req.body

    const payload = {
      'wallet-id': xWalletId,
      seed
    }

    await startWallet(payload)
    await userService.loginUser(xWalletId, seed)

    res.status(200).json({ message: 'User logged successfully' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  registerUser,
  loginUser
}
