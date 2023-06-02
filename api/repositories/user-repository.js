const User = require('../models/user')

async function createUser (userData) {
  return User.create(userData)
}

async function getUserByWalletId (xWalletId) {
  return User.findOne({ xWalletId })
}

async function updateUserAdress (userId, address) {
  return User.findByIdAndUpdate(userId, { address })
}

module.exports = {
  createUser,
  getUserByWalletId,
  updateUserAdress
}
