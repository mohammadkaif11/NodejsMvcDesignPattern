const InsititueSchema = require('../../DataContext/Model/Insititue.Model');
const role = require('../../Helpers/role');


const AddInsititue = async (body) => {
    console.log(body)
    const insititueSchema = new InsititueSchema({ name: body.name, email: body.email,password:body.password, phoneNumber: body.phoneNumber, code: body.code, address: body.address, role: role.User });
    const data=await   insititueSchema.save();
    return data;
}


module.exports={
    AddInsititue
}