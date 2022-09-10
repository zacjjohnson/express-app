const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;
// const axios = require('axios');
// variables and declarations always at the top of the file

// =========== Connection to DB =======================

mongoose
.connect('mongodb://localhost/mongooseSeed')
.then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
.catch(err => console.log('Error connecting to mongo', err));


// ====================================================

// middleware always comes between declarations and routes
// ========== MIDDLEWARE =============
app.use(express.static('public'));
// app.use(express.static('views'));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// =====================================

// =============== Routes ==============

// this is what determines the prefix to your routes winthin the file you are requiring. if you add "/blah" then all the routes in your index file would have to start with blah before any routes defined. ie: you create a route in index.js that has an endpoint of "/home" but you prefixed "/blah" in the app.js to reuire index.js, your end resultys from the route would be www.domainname.com/blah/home

app.use('/', require('./routes/index'));

// ====================================









// remember to listen at bottom of the app js
app.listen(PORT || 3000, () => console.log(`Listening on port ${PORT}`));



// // routes are the 2nd to last element in your app.js
// // ============== ROUTES =====================

// app.get('/', (req, res, next) => {
//     // this is how you display a file without hbs as a view engine
//     // res.sendFile(__dirname + '/views/index.html');

//     const pageName = 'Home Screen';
//     const displayArray = ["Hats", "Dogs", "Reptiles", "Phones", 'Cars', "Nails"];

//     const blah = {
//         pageName,
//         content: displayArray,
//         showContent: displayArray.length > 5
//     }

//     // this is how you render a file having a view engine like "hbs"
//     // res.render('index', {pageName, content: displayArray, showContent: displayArray.length > 5});
//     res.render('index', blah);


//     // when your express side is an api only, then you just have to res.json the inforamtion
//     // res.json({pageName, content: displayArray});
// })

// app.get('/about', (req, res, next) => {
//     // res.sendFile(__dirname + '/views/about.html');
//     axios.get('https://pokeapi.co/api/v2/pokemon').then(apiRes => {
//         console.log({apiRes: apiRes.data.results});

//         const data = {
//             content: apiRes.data.results
//         }
//         res.render('about', data);
//     }).catch(err => {
//         console.log({err});
//         next();
//     })
//     // res.render('about');
// })

// app.get('/contact', (req, res, next) => {
//     // res.sendFile(__dirname + '/views/contact.html');
//     res.render('contact');
// })