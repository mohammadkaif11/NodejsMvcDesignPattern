const express = require('express');
const router = express.Router();
const testService = require('../../Service/Test/test.service')
const ApiError = require('../../Helpers/ErrorHandler/ApiError')
const ApiResponse =require('../../Helpers/ResponseHandler/ApiResponse')

const PostTest = async (req, res, next) => {
    try {
        const { name, marks, passingmarks, maximumtime } = req.body;
        if (
            name == null || name == "" ||
            marks == null || marks == "" ||
            passingmarks == null || passingmarks == "" ||
            maximumtime == null || maximumtime == ""
        ) {
            return next(ApiError.badRequest('Name and Marks, PassingMarks, MaximumTime is Required'));
        }
        const data = await testService.AddTest(req.body);
        if(data!=null){
            res.send(ApiResponse.SuccessResponse(202,"Test is save sucessfully",data))
        }
    } catch (error) {
        next(error);
    }
}

const PutTest = async (req, res, next) => {
    try {
        const data = await testService.UpdateTest(req.body);
        res.json(data);
    } catch (error) {
        console.log(error)
        res.send("Some Error Occured");
    }
}

const DeleteTest = async (req, res, next) => {
    try {
        var _id = req.query._id;
        console.log(_id)
        const data = await testService.DeleteTest(_id);
        res.json(data);
    } catch (error) {
        console.log(error)
        res.send("Some Error Occured");
    }
}

router.post('/add', PostTest);
router.post('/update', PutTest)
router.delete('/delete', DeleteTest)

module.exports = router;
