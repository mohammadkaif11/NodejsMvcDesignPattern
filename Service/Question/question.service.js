const QuestionSchema = require('../../DataContext/Model/Question.Model')


const AddQuestion = async (body) => {
    const questionSchema = QuestionSchema({ tags: body.tags, marks: body.marks });
    const data = await questionSchema.save();
    return data;
}

const UpdateQuestion = async (body) => {
    const data = await QuestionSchema.findByIdAndUpdate(body._id, { tags: body.tags, marks: body.marks });
    return data;
}
const DeleteQuestion = async (_id) => {
    const data = await QuestionSchema.findByIdAndDelete(_id);
    return data;
}
module.exports = {
    AddQuestion,
    UpdateQuestion,
    DeleteQuestion
}