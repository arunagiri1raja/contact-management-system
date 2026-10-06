const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    // your four fields here
    contactId: {
    type: String,
    required: true,
    unique: true
},

name: {
    type: String,
    required: true
},

phone: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/
},

email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
}

});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;

