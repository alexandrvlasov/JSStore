const mongoose = require('mongoose'), Schema = mongoose.Schema

const productSchema = new Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    imagePath: { type: String, required: true },
    title: { type: String, required: true },
    sku: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    priceWholesale: Number,
    is_new: { type: Boolean, default: false },
    // category: [{ type: mongoose.Schema.ObjectId, ref: 'Category' }],
    // size: [String]    
})

module.exports = mongoose.model('Product', productSchema)