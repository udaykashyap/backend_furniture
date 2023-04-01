//this is backend of project

const express = require('express');
const { connection } = require('./db');
const userRouter = require('./Router/user.router');
const productRoute = require('./Router/product.router');
const { auth } = require('./Middleware/auth.middleware');
const cartRouter = require('./Router/cart.router');
const wishListRouter = require('./Router/wishlist.router');
require("dotenv").config()
const cors = require('cors')

const app = express();


app.use(cors())
app.use(express.json());
app.use('/user', userRouter)
app.use(auth)
app.use('/product', productRoute)
app.use('/cart', cartRouter)
app.use('/wishlist', wishListRouter)




app.listen(process.env.PORT, async () => {
    await connection
    console.log('Connected to MongoDB')
    console.log('listening')
})