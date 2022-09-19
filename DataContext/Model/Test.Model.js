const mongoose=require('mongoose')

const sechma = new mongoose.Schema({
    TestName: {
        type: String,
        required: true,
    },
    maximumNumber: {
        type: Number,
        required: true,
    },
    passingNumber: {
        type: Number,
        required: true
    },
    maximumTime: {
        type: Number,
        unique: true
    },
    questionIds: {
        type: [mongoose.Types.ObjectId]
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
const TestSchema = mongoose.model('testSchema', sechma);
module.exports = TestSchema;

