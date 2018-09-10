const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProdouctSchema = new Schema ({

    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    adTiltle:{
        type:String,
        required:true
    },
    adDescription:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    number:{
        type: String,
        required:true
    }
})

module.exports = mongoose.model('Product', ProdouctSchema);