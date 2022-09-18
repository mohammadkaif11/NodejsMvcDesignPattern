const express = require('express');
const router = express.Router();
const userService = require('../../Service/users/user.service')
const authorize = require('../../Middleware/authorize')
const Role = require('../../Helpers/role')


// routes
router.post('/authenticate', authenticate);     
router.get('/',authorize, getAll);
router.get('/:id', getById);      


function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    console.log(req.user)
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getById(req, res, next) {
    const currentUser = req.user;
    const id = parseInt(req.params.id);
    if (id !== currentUser.sub && currentUser.role !== Role.Admin) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

module.exports = router;

