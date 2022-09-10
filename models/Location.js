const mongoose = require('mongoose');

// ===========================This is our model.============================
const { Schema, model } = mongoose;
// Instead of doing mongoose.Schema
// This allows you to do just "Scheme" because it's a variable

const locationSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    aptNumber: {
        type: String, default: null
    },
    houseNumber: Number,
    streetName: String,
    zip: Number,
    city: String,
    State: String,
    animals: {
        type: [
            {type: Schema.Types.ObjectId, ref: 'Animals'}
        ]
    }
}, 

{
    timestamps: true
    // timestamps: {
    //     createdAt: 'created_at',
    //     updatedAt: 'updated_at'
    // }
});

const Location = model('Location', locationSchema);

module.exports = Location;