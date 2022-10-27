const TestSchema = require('../../DataContext/Model/Test.Model')


const AddTest = async (body) => {
    console.log(body);
    const {name,marks,passingmarks,maximumtime}=body;
    const testSchema = TestSchema({ Name:name , Marks:marks, PassingMarks:passingmarks, MaximumTime: maximumtime });
    const data = await testSchema.save();
    return data;
}

const UpdateTest = async (body) => {
    const {_id,testname,maximumnumber,passingnumber,timerequired}=body;
    const data = await TestSchema.findByIdAndUpdate(_id,{ TestName: testname, maximumNumber:maximumnumber, passingNumber:passingnumber, timeRequired: timerequired });
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