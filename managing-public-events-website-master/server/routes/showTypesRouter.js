const express = require('express')
const router = express.Router();
const showTypes = require('../services/showTypes')


router.get('/', async function (req, res, next) {
    try {
        const data =await showTypes.getAllShowsTypes()
        res.send(data);
    } catch (err) {
        console.error('error while getting users', err.message);
        next(err);
    }
});

router.get('/type=:type', async function (req, res, next) {
    try {
        const data =await showTypes.getSingleShowsTypes(req.params.type)
        res.send(data);
    } catch (err) {
        console.error('error while getting users', err.message);
        next(err);
    }
});

module.exports = router;