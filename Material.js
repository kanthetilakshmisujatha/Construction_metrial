const mongoose = require('mongoose');

const MaterialSchema = new mongoose.Schema({
    name: String,
    cost: Number,
    durability: Number,
    supplier: String,
    availability: String
});

module.exports = mongoose.model('Material', MaterialSchema);