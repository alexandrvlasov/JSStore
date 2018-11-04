const mongoose = require('mongoose'), Schema = mongoose.Schema

const userSchema = new Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    email: { type: String, required: true, unique: true },
    password: { type: Number, required: true },
    firstName: String,
    lastName: String,
    phone: String,
    country: String,
    city: String
})

module.exports = mongoose.model('User', userSchema)