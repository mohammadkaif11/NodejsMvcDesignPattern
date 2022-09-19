import mongoose, { Model, Mongoose } from 'mongoose';
const { Schema } = mongoose;

const optionSchema = new Schema({
    _id: {
        typeof: mongoose.Types.ObjectId,
        index: true,
        unique: true
    },
    //[{value:"ans",isAns:true}]
    optionValues: {
        typeof: [{}],
        default: undefined
    }
});

const OptionSchema = mongoose.model('optionSchema', questionSchema);
module.exports = OptionSchema;