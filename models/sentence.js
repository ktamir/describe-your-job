var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var sentenceSchema = new Schema({
    text: String,
    date: Date
});

// the schema is useless so far
// we need to create a model using it
var Sentence = mongoose.model('Sentence', sentenceSchema);

// make this available to our users in our Node applications
module.exports = Sentence;