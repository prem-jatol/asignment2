const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    formId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Form',
        require: true
    },
    name:{
        type: string,
        default: undefined
    },
    email:{
        type: email,
        default: undefined
    },
    password:{
        type: string,
        default: undefined
    },
    select:{
        type: Array,
        default: undefined
    },
    checkBox:{
        type: Array,
        default: undefined
    },
    radioBtn:{
        type: string,
        default: undefined
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', UserSchema);

module.exports = User;