const express = require('express');
const router = express.Router();
const testService = require('../../Service/Test/test.service')


const PostTest = async (req, res, next) => {
    try {
        const data = await testService.AddTest(req.body);
        res.json(data);
    } catch (error) {
        console.log(error)
        res.send("Some Error Occured");
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
        var _id=req.query._id;
        console.log(_id)
        const data = await testService.DeleteTest(_id);
        res.json(data);
    } catch (error) {
        console.log(error)
        res.send("Some Error Occured");
    }
}

router.post('/add', PostTest);
router.post('/update',PutTest)
router.delete('/delete',DeleteTest)

module.exports = router;
