const express = require('express')
const router = express.Router();
const auditoriumOwners = require('../services/auditoriumOwners')


router.get('/', async function (req, res, next) {
    try {
        res.send(await auditoriumOwners.getAllOwners());
    } catch (err) {
        console.error('error while getting users', err.message);
        next(err);
    }
});


router.get('/:id', async function (req, res, next) {
    try {
        res.send(await auditoriumOwners.getSingleOwner(req.params.id));
    } catch (err) {
        console.error('error while getting users', err.message);
        next(err);
    }
});

// ============================= POST =================================

router.post('/', async function (req, res, next) {
    console.log("post", "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    try {
        console.log("req    " + req);
        console.log("req " + req.body.email)
        const data = await auditoriumOwners.setNewOwner(req.body);
        res.send(data);
    } catch (err) {
        console.error('error while setting owners', err.message);
        next(err);
    }
});

// ============================= DELETE =================================
router.delete('/:id', async (req, res, next) => {
    console.log("in router");
    try {
        const data = await auditoriumOwners.deleteOwner(req.params.id);
        res.send(data);
    } catch (err) {
        console.error('error while setting artists', err.message);
        next(err);
    }
});
//======update======
router.put('/:userId', async (req, res, next) => {
    try {
        let data = await auditoriumOwners.updateOwner(req.params.userId, req.params.body);
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

