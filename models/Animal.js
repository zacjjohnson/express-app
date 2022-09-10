const mongoose = require('mongoose');

// ===========================This is our model.============================
const { Schema, model } = mongoose;
// Instead of doing mongoose.Schema
// This allows you to do just "Scheme" because it's a variable

const animalSchema = new Schema({
    name: String,
    isMale: {
        type: Boolean,
        default: false
    },
    isFemale: {
        type: Boolean,
        default: false
    },
    color: {
        type: String,
        default: 'Black',
        enum: ['Black', 'Gray', 'White', 'Orange', 'Pink']
    },
    siblings: {type: [{type: Schema.Types.ObjectId, ref: 'Animal'}]},
    aggressive: {
        type: Boolean,
        default: false
    },
    petType: {
        type: String,
        enum: ['Cat', 'Dog', 'Hamster', 'Parrot', 'Snake']
    },
    tail: Boolean,

}, 

{
    timestamps: true
    // timestamps: {
    //     createdAt: 'created_at',
    //     updatedAt: 'updated_at'
    // }
});

const Animal = model('Animal', animalSchema);

module.exports = Animal;