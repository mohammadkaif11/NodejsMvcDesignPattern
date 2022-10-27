const express = require('express');
const router = express.Router();
const insititueService = require('../../Service/Insititue/insititue.service')
const  ApiError =require('../../Helpers/ErrorHandler/ApiError')
    
const PostInsitute = async (req, res, next) => {
    try {
        const data = await insititueService.AddInsititue(req.body);
        if(data==null){
            next(ApiError.badRequest("Data is null there"));
        }
        res.json(data);
    } catch (error) {
        
    }
}

router.post('/add', PostInsitute);


module.exports = router;
