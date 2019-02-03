let mongoose = require('mongoose');

//create a model class

let contactsSchema = mongoose.Schema({

    name:String,
    description:String,
    },

{
    collection:"favouritethings"
}
);

module.exports = mongoose.model('gurpreet',contactsSchema);