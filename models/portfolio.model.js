const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;

let formSchema = new Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  message: { type: String, default: '' },
});

//Model
const User = mongoose.model('User', formSchema);
module.exports = User;
