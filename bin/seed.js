const mongoose = require('mongoose');

// ===========================This is our model.============================
// const { Schema, model } = mongoose;
// // Instead of doing mongoose.Schema
// // This allows you to do just "Scheme" because it's a variable

// const catSchema = new Schema({
//     name: String,
//     isMale: {
//         type: Boolean,
//         default: false
//     },
//     isFemale: {
//         type: Boolean,
//         default: false
//     },
//     color: {
//         type: String,
//         default: 'Black',
//         enum: ['Black', 'Gray', 'White', 'Orange', 'Pink']
//     },
//     siblings: {type: [{type: Schema.Types.ObjectId, ref: 'Cat'}]},

// }, {
//     timestamps: true
//     // timestamps: {
//     //     createdAt: 'created_at',
//     //     updatedAt: 'updated_at'
//     // }
// });

// const Cat = model('Cat', catSchema);
// place export code here when we move this.


const Cat = require('../models/Cat')
// ==========================================================================

mongoose
.connect('mongodb://localhost/mongooseSeed')
.then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
.catch(err => console.log('Error connecting', err));

const myCatArray = [
    {
        name: 'Cornpuff',
        isFemale: false
    },
    {
        name: 'Strangeluv',
        isFemale: false
    },
    {
        name: 'Brolly',
        isFemale: false
    },
    {
        name: 'Kringer',
        isFemale: true
    },
    {
        name: 'Kevin',
        isFemale: true
    }
]

const oneCat = {
    name: 'Britney',
    isFemale: false
    
}

// Cat.create({
//     name: 'Britney',
//     isFemale: true,
// }).then(newlyCreatedCat => {
//     console.log('Newly Created Cat: ', newlyCreatedCat);
// }).then(() =>{
//     mongoose.disconnect();
// }).catch(err => {
//     mongoose.disconnect()
//     throw err;
// })

// Cat.create(myCatArray).then(newlyCreatedCat => {
//         console.log('Newly Created Cat: ', newlyCreatedCat);
//     }).then(() =>{
//         mongoose.disconnect();
//     }).catch(err => {
//         mongoose.disconnect()
//         throw err;
//     })


// ***------------- this is how you find a "read" a cat -------- ***
// this is to have everything from the collection return to you
// Cat.find({name: 'Kevin'}).then(catsFromDb => {

//     console.log(catsFromDb);
//     mongoose.disconnect();
// }).catch(err => {
//     mongoose.disconnect();
//     throw err;
// });

// Cat.findByIdAndUpdate('631a816d7b7a166e65e2baac', {isMale: true, available: true}, {new: true}).then(updatedCatFromDb => {
    
//         console.log(updatedCatFromDb);
//         mongoose.disconnect();
//     }).catch(err => {
//         mongoose.disconnect();
//         throw err;
//     });




// '631a816d7b7a166e65e2baac'
// THIS IS HOW YOU DELETE A CAT

// Cat.findByIdAndRemove('631a816d7b7a166e65e2baac').then(() => {
    
//             console.log('You have Deleted a CAT!');
//             mongoose.disconnect();
//         }).catch(err => {
//             mongoose.disconnect();
//             throw err;
//         });



Animal.findById('631a816d7b7a166e65e2baac').then(soonToBeGone => {
    
        console.log(soonToBeGone);
        Animal.findByIdAndRemove('631a816d7b7a166e65e2baac').then(() => {
        console.log(`You have Forcefully Removed ${soonToBeGone} from your database. Good Job!`)

        }).catch(err => {
            mongoose.disconnect();
            throw err;
        })
        mongoose.disconnect();
    }).catch(err => {
        mongoose.disconnect();
        throw err;
    });