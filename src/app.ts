import 'dotenv/config'
import express from 'express'
import { connect } from 'mongoose'

const app = express()
const PORT = process.env.PORT || 7856
const MONGODB = process.env.MONGODB_URL

app.use(express.json())

connect(MONGODB)
  .then(() => {
    console.log('mongoDB connected!')
    app.listen(PORT, () => {
      try {
        console.log(`Server started on port - ${PORT}`)
      } catch (err) {
        console.log('Server error! - ', err)
      }
    })
  })
  .catch((err) => console.log('mongoDB error!', err))
