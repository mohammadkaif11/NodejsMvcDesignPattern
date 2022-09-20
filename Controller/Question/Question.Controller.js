const express = require('express');
const router = express.Router();
const questionService=require('../../Service/Question/question.service');

const PostQuestion= async (req, res, next) => {
    try {
        const data = await questionService.AddQuestion(req.body);
        res.json(data);
    } catch (error) {
        console.log(error)
        res.send("Some Error Occured");
    }
}

const PutQuestion = async (req, res, next) => {
    try {
        const data = await questionService.UpdateQuestion(req.body);
        res.json(data);
    } catch (error) {
        console.log(error)
        res.send("Some Error Occured");
    }
}

const DeleteQuestion = async (req, res, next) => {
    try {
        var _id=req.query._id;
        const data = await questionService.DeleteQuestion(_id);
        res.json(data);
    } catch (error) {
        console.log(error)
        res.send("Some Error Occured");
    }
}

router.post('/add',PostQuestion);
router.post('/update',PutQuestion)
router.delete('/delete',DeleteQuestion)

module.exports = router;
