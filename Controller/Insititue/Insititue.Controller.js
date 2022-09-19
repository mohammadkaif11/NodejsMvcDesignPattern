const express = require('express');
const router = express.Router();
const insititueService = require('../../Service/Insititue/insititue.service')

const PostInsitute = async (req, res, next) => {
    try {
        const data = await insititueService.AddInsititue(req.body);
        res.json(data);
    } catch (error) {
        console.log(error)
        res.send("Some Error Occured");
    }
}

router.post('/add', PostInsitute);


module.exports = router;
