const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let formSchema = new Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  message: { type: String, default: '' },
});

//
const User = mongoose.model('User', formSchema);
module.exports = User;
