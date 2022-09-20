const OptionSchema = require('../../DataContext/Model/Option.Model')


const AddOption = async (body) => {
    const optionSchema = await OptionSchema({ OptionValues: body.OptionValues });
    const data = optionSchema.save();
    return data

}

const UpdateOption = async (body) => {
    const data = await OptionSchema.findByIdAndUpdate(body._id, { OptionValues: body.OptionValues });
    return data;

}
const DeleteOption = async (_id) => {
    const data = await OptionSchema.findByIdAndDelete(_id);
    return data;
}

module.exports = {
    AddOption,
    UpdateOption,
    DeleteOption
}