const express = require('express');
const router = express.Router();
const optionService=require('../../Service/Option/option.service')

const PostOption = async (req, res, next) => {
    try {
        const data = await optionService.AddOption(req.body);
        res.json(data);
    } catch (error) {
        console.log(error)
        res.send("Some Error Occured");
    }
}

const PutOption = async (req, res, next) => {
    try {
        const data = await optionService.UpdateOption(req.body);
        res.json(data);
    } catch (error) {
        console.log(error)
        res.send("Some Error Occured");
    }
}

const DeleteOption = async (req, res, next) => {
    try {
        var _id=req.query._id;
        const data = await optionService.DeleteOption(_id);
        res.json(data);
    } catch (error) {
        console.log(error)
        res.send("Some Error Occured");
    }
}

router.post('/add', PostOption);
router.post('/update',PutOption)
router.delete('/delete',DeleteOption)

module.exports = router;
