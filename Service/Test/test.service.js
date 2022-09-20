const TestSchema = require('../../DataContext/Model/Test.Model')


const AddTest = async (body) => {
    const testSchema = TestSchema({ TestName: body.TestName, maximumNumber: body.maximumNumber, passingNumber: body.passingNumber, timeRequired: body.timeRequired });
    const data = await testSchema.save();
    return data;
}

const UpdateTest = async (body) => {
    const data = await TestSchema.findByIdAndUpdate(body._id, { TestName: body.TestName, maximumNumber: body.maximumNumber, passingNumber: body.passingNumber, timeRequired: body.timeRequired });
    return data;
}
const DeleteTest = async (_id) => {
    const data = await TestSchema.findByIdAndDelete(_id);
    return data;
}

module.exports = {
    AddTest,
    UpdateTest,
    DeleteTest
}