const express = require('express')
const router = express.Router();
const artists = require('../services/artists')


router.get('/', async function (req, res, next) {
    try {
        console.log('in get all router');
        res.json(await artists.getAllArtists());
    } catch (err) {
        console.error('error while getting users', err.message);
        next(err);
    }
    res.send(res);
});

router.get('/:id', async function (req, res, next) {
    try {
        res.json(await artists.getSingleArtist(req.params.id));
    } catch (err) {
        console.error('error while getting users', err.message);
        next(err);
    }
});
// ============================= POST =================================
router.post('/', async function (req, res, next) {
    try {
        console.log("req    " + req);
        console.log("req " + req.body.email)
        const data = await artists.setNewArtist(req.body);
        res.json(data);
    } catch (err) {
        console.error('error while setting artists', err.message);
        next(err);
    }
});
// ============================= DELETE =================================
router.delete('/:id', async function (req, res, next) {
    console.log("in router");
    try {
        const data = await artists.deleteArtist(req.params.id);
        res.json(data);
    } catch (err) {
        console.error('error while setting artists', err.message);
        next(err);
    }
});

router.put('/:userId', async function (req, res, next) {
    try {
        let data = await artists.updateArtist(req.params.userId, req.params.body);
        if (!data) {
            res.send("user does not exist")
        }
        else {
            res.json(data);
        }
    } catch (err) {
        console.error('error while getting users', err.message);
        next(err);
    }
});
module.exports = router;
