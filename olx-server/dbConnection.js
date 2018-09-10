const { DATABASE_URL } = require('./config');
const mongoose = require('mongoose');

mongoose.connect(DATABASE_URL, err => {
    if( err ) {
        console.log(err);
    }

    console.log('Connected Successfully!')
})