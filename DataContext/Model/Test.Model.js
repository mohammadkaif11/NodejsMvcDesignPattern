const mongoose=require('mongoose')

const sechma = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Marks: {
        type: Number,
        required: true,
    },
    PassingMarks: {
        type: Number,
        required: true
    },
    MaximumTime: {
        type: Number,
        unique: true
    },
    QuestionIds: {
        type: [mongoose.Types.ObjectId],
        default:[]
    },
    CreatedOn: {
        type: Date,
        default: Date.now
    },
    UpdatedOn: {
        type: Date,
        default: Date.now
    }
});
const TestSchema = mongoose.model('testSchema', sechma);
module.exports = TestSchema;

