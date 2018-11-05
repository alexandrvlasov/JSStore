const mongoose = require('mongoose'), Schema = mongoose.Schema

const categorySchema = new Schema({
    name: { type: String, required: true, unique: true },
    imagePath: { type: String, required: true }
})

module.exports = mongoose.model('Category', categorySchema)