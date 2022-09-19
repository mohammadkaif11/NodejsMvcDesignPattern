import mongoose, { Model, Mongoose } from 'mongoose';
const { Schema } = mongoose;

const insititueSchema = new Schema({
    _id: {
        typeof: mongoose.Types.ObjectId,
        index: true,
        unique: true
    },
    name: {
        typeof: String,
        required: true,
    },
    email: {
        typeof: Email,
        required: true,
        unique: true
    },
    password: {
        typeof: String,
        required: true
    },
    phoneNumber: {
        typeof: String,
        required: true,
        unique: true
    },
    code: {
        typeof: String,
        required: true,
        unique: true
    },
    address: {
        typeof: String,
        required: true,
        unique:true
    },
    role: {
        typeof: String,
        required: true
    },
    testCollectionIds: {
        typeof: [],
        default: undefined
    },
    /**we can used that one also
     * { timestamps: true }
     */
    createdOn: {
        typeof: Date,
        default: Date.now
    },
    updatedOn: {
        typeof: Date,
        default: Date.now
    }

});
const InsititueSchema = mongoose.model('InsititueSchema', insititueSchema);
module.exports = InsititueSchema;

