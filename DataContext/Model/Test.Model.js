import mongoose, { Model, Mongoose } from 'mongoose';
const { Schema } = mongoose;

const testSchema = new Schema({
    _id: {
        typeof: mongoose.Types.ObjectId,
        index: true,
        unique: true
    },
    tag: {
        typeof: String,
        required: true,
    },
    maximumNumber: {
        typeof: Number,
        required: true,
    },
    passingNumber: {
        typeof: Number,
        required: true
    },
    maximumTime: {
        typeof: Number,
        unique: true
    },
    questionIds: {
        typeof: []
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
const TestSchema = mongoose.model('testSchema', testSchema);
module.exports = TestSchema;

