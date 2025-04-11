const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
    formName: {
        type: String,
        require: true
    },
    formId : {
        type: String,
        unique: true
    },
    colorPallet: {
        type : Array,
        default: undefined
    },
    formSchema: {
        type: Array
    }
}, {
    timestamps: true
})

const Form = mongoose.model('Form', FormSchema);

module.exports = Form;