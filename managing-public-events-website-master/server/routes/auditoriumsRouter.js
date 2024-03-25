const express = require('express')
const router = express.Router();
const allAuditorium = require('../services/auditoriums')

router.get('/', async function (req, res, next) {
    console.log("in router audi...");
    try {
        const data =await allAuditorium.getAllAuditoriums()
        res.json(data);
    } catch (err) {
        console.error('error while getting showings ', err.message);
        next(err);
    }
});

router.get('/:id', async function (req, res, next) {
    try {
        const data =await allAuditorium.getSingleAuditoriums(req.params.id)
        res.send(data);
    } catch (err) {
        console.error('error while getting showings ', err.message);
        next(err);
    }
});

router.post('/', async function (req, res, next) {
    try {
        const data = await allAuditorium.setNewAuditoium(req.body);
        res.send(data);
    } catch (err) {
        console.error('error while setting auditorium', err.message);
        next(err);
    }
});


module.exports = router;