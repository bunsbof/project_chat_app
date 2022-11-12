const express = require("express");
const chats = require("./data/data");
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const colors = require('colors')
const userRoutes = require('./routes/userRoutes')
const {notFound, errorHandler} = require('./middleware/errorHandler')

dotenv.config()
connectDB()
const app = express();

app.use(express.json()) // to accept JSON Data

app.use('/api/user', userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT =  process.env.PORT || 5000

app.listen(PORT, console.log(`Server started at ${PORT}`.yellow.bold));
