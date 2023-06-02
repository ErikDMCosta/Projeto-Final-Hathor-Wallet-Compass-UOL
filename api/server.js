require('dotenv').config()
const mongoose = require('mongoose')
const app = require('./app')

const { DB_DIALECT, DB_HOST, DB_PORT, DB_NAME, PORT } = process.env
const port = PORT || 3000

mongoose.connect(`${DB_DIALECT}://${DB_HOST}:${DB_PORT}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`)
    })
  })
  .catch((error) => {
    console.error('Database connection error:', error)
  })
