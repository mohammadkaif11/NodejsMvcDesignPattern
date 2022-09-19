import mongoose, { Model, Mongoose } from 'mongoose';
const { Schema } = mongoose;

const questionSchema = new Schema({
    _id: {
        typeof: mongoose.Types.ObjectId,
        index: true,
        unique: true
    },
    tag: {
        typeof: String,
        required: true,
    },
    marks:{
        typeof:Number
    },
    optionId:{
        typeof: mongoose.Types.ObjectId,
        default:null
    },
    createdOn: {
        typeof: Date,
        default: Date.now
    },
    updatedOn: {
        typeof: Date,
        default: Date.now
    }

});
const QuestionSchema = mongoose.model('questionSchema', questionSchema);
module.exports = QuestionSchema;

