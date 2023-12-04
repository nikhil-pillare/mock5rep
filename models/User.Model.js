const mongoose = require('mongoose');

const UserSchema= mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},
    phone:{type: Number, required: true},
    label:{type: String, required: true},
    booked_slots:{type: Array, default:[]}
})

const UserModel= mongoose.model("contact", UserSchema);

module.exports= UserModel