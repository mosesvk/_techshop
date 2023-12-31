import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true, 
        ref: "User"
    }, 
    name: {
        type: String, 
        required: true
    },
    image: {
        type: String, 
        required: true
    },
    brand: {
        type: String, 
        required: true
    },
    category: {
        type: String, 
        required: true
    },
})

const reviewSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true, 
        ref: "User"
    }, 
    name: {
        type: String, 
        required: true
    }, 
    rating: {
        type: Number,
        required: true
    }, 
    comment: {
        type: String, 
        required: true
    },
})

