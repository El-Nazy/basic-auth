var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt")

var UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    isAdmin: {type: Boolean, default: false},
    createdDate: { type: Date, default: new Date() },
});

UserSchema.pre("save", function(next) {
    const saltRounds = 10;
    bcrypt.hash(this.password, saltRounds)
    .then(hash => {
        this.password = hash;
        next();
    })
    .catch(err => next(err));
})

module.exports = mongoose.model('Users', UserSchema);