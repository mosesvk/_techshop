import mongoose from 'mongoose';
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users';
import products from './data/products';
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async() => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(product => {
            return {...product, user: adminUser}
        })

        await Product.insertMany(sampleProducts)

        console.log(`Data Imported successfully`.green.inverse)
        process.exit()
    } catch (err) {     

        console.error(`Error: ${err.message}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async() => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()  

        console.log(`Data Destroyed`.orange.inverse)
        process.exit()
    } catch (err) {
        console.error(`Error: ${err.message}`.red.inverse)
        process.exit(1)
    }
}