import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
})

mongoose.models = {} // required for Nextjs since the file may render multiple times
export const Product = mongoose.model('Product', schema)