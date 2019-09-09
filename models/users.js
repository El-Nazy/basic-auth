var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    createdDate: { type: Date, default: new Date() },
    token: { type: String, default: "" },
});

module.exports = mongoose.model('Users', UserSchema);