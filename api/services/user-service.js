const userRepository = require('../repositories/user-repository')
const { getAddress } = require('./headless-wallet-service')

async function registerUser (xWalletId, seed) {
  try {
    const existingUser = await userRepository.getUserByWalletId(xWalletId)
    if (existingUser) {
      throw new Error('User already exists')
    }

    const userData = { xWalletId, seed }
    return userRepository.createUser(userData)
  } catch (error) {
    throw new Error('Error registering user')
  }
}

async function loginUser (xWalletId, seed) {
  try {
    const user = await userRepository.getUserByWalletId(xWalletId)
    if (!user || user.seed !== seed) {
      throw new Error('Invalid login credentials')
    }
    if (!user.address) {
      const address = await getAddress(xWalletId)
      await userRepository.updateUserAdress(user._id, address.address)
    }

    return user
  } catch (error) {
    throw new Error('Error logging in')
  }
}

module.exports = {
  registerUser,
  loginUser
}
