import { Product } from "@/model/product";
import { connectDB } from "@/utils/database"

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.status(404).json({success: false, message: `No API with ${req.method} Method`});
    }else{
    await connectDB();

    const {name, price, category} = req.body
    await Product.create({name,price,category});
    res.status(201).json({ success: true, message: "Product Created successfully" })
    }
}