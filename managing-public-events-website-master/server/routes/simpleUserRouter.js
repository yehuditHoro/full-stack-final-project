const express = require('express')
const router = express.Router();
const simpleUsers = require('../services/simpleUsers')
const email = require('../email')


router.get('/', async function (req, res, next) {
    try {
        const data = await simpleUsers.getAllSimple();
        res.send(data);
    } catch (err) {
        console.error('error while getting users', err.message);
        next(err);
    }
});

router.get('/:id', async function (req, res, next) {
    try {
        let data = await simpleUsers.getSingleSimple(req.params.id);
        if (!data) {
            res.send("user does not exist")
        }
        else {
            res.send(data);
        }
    } catch (err) {
        console.error('error while getting users', err.message);
        next(err);
    }
});

router.post('/', async function (req, res, next) {
    try {
        //console.log("req    " + req);
        console.log("req.body =  " + req.body)
        const data = await simpleUsers.setNewUser(req.body);
        res.send(data);
    } catch (err) {
        console.error('error while getting users', err.message);
        next(err);
    }
});


router.delete('/:id', async function (req, res, next) {
    try {
        let data = await simpleUsers.deleteUser(req.params.id);
        if (!data) {
            res.send("user does not exist")
        }
        else {
            res.send(data);
        }
    } catch (err) {
        console.error('error while getting users', err.message);
        next(err);
    }
});

router.put('/:userId', async function (req, res, next) {
    console.log(req.body);
    try {
        let data = await simpleUsers.updateUser(req.params.userId, req.body);
        if (!data) {
            res.send("user does not exist")
        }
        else {
            res.send(data);
        }
    } catch (err) {
        console.error('error while getting users', err.message);
        next(err);
    }
});

module.exports = router;