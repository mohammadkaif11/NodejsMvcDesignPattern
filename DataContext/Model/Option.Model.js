const mongoose=require('mongoose')

const sechma = new mongoose.Schema({
    //[{value:"ans",isAns:true}]
    optionValues: {
        typeof: [
         {
            value:{
                type:String
            },
            isAns:{
                type:Boolean
            }
         }
        ],
    }
});

const OptionSchema = mongoose.model('OptionSchema', sechma);
module.exports = OptionSchema;