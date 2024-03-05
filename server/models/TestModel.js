const mongoose = require('mongoose');
const { Schema } = mongoose;

const TestModel = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true,
        },
        school: {
            type: String,
            required: true
        }
    }
)

const Test = mongoose.model("Test", TestModel);
module.exports = Test;