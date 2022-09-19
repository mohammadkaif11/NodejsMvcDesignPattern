const mongoose=require('mongoose')

const sechma = new mongoose.Schema({
    tag: {
        type: String,
        required: true,
    },
    marks:{
        type:Number
    },
    optionId:{
        type: mongoose.Types.ObjectId,
        default:null
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    updatedOn: {
        type: Date,
        default: Date.now
    }

});
const QuestionSchema = mongoose.model('QuestionSchema', sechma);
module.exports = QuestionSchema;

