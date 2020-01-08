const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Signup = new Schema({
    fname: {
       type: String
    },
    lname: {
        type: String
     },
     username: {
        type: String
     },
     password: {
        type: String
     },
    email: {
       type: String
    },
    address: {
       type: String
    },
    phone: {
       type: Number
    }
 }, {
    collection: 'signup'
 })
 
 module.exports = mongoose.model('Signup', Signup)