const mongoose=require('mongoose')

const sechma = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
        unique:true
    },
    role: {
        type: String,
        required: true
    },
    testCollectionIds: {
        type: [mongoose.Types.ObjectId]
        },
    /**we can used that one also
     * { timestamps: true }
     */
    createdOn: {
        type: Date,
        default: Date.now
    },
    updatedOn: {
        type: Date,
        default: Date.now
    }
});
const InsititueSchema = mongoose.model('InsititueSchema', sechma);
module.exports = InsititueSchema;

