const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000
const colors = require('colors')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

// Connect to database
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get('/', (req,res) =>{
  res.status(200).json({message: "Welcom to support desk API"})
})


// Routes
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, ()=> console.log(` Server listening on port ${PORT}`))