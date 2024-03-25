const express = require('express')
const router = express.Router();
const allShows = require('../services/shows')



router.get('/id=:id', async function (req, res, next) {
    console.log("in router single shows");
    try {
        const data =await allShows.getSingleShow(req.params.id)
        res.send(data);
    } catch (err) {
        console.error('error while getting showings ', err.message);
        next(err);
    }
});

router.get('/artist=:firstName/:lastName', async function (req, res, next) {
    console.log(req.params.firstName, " ", req.params.lastName);
    try {
        const data =await allShows.getArtistShows(req.params.firstName, req.params.lastName)
        res.send(data);
    } catch (err) {
        console.error('error while getting showings ', err.message);
        next(err);
    }
});

router.get('/show-type=:showType', async function (req, res, next) {
    try {
        const data =await allShows.getShowByType(req.params.showType)
        res.send(data);
    } catch (err) {
        console.error('error while getting showings ', err.message);
        next(err);
    }
});
router.get('/', async function (req, res, next) {
    console.log("in router shows");
    try {
        const data = await allShows.getAllShows();
        res.send(data);
    } catch (err) {
        console.error('error while getting showings ', err.message);
        next(err);
    }
});
router.get('/date=:date', async function (req, res, next) {
    try {
        const data = await allShows.getShowsByDate(req.params.date)
        res.send(data);
    } catch (err) {
        console.error('error while getting showings ', err.message);
        next(err);
    }
});

router.get('/date=:date', async function (req, res, next) {
    console.log("in >date router" + req.params.date);
    try {
        const data = await allShows.getShowsByIncreasedDate(req.params.date)
        res.send(data);
    } catch (err) {
        console.error('error while getting showings ', err.message);
        next(err);
    }
});

router.get('/auditorium=:auditorium/date=:date', async function (req, res, next) {
    console.log(req.params.auditorium, " ", req.params.date);
    try {
        const data = await allShows.getShowByAuditorium(req.params.auditorium, req.params.date)
        res.send(data);
    } catch (err) {
        console.error('error while getting showings ', err.message);
        next(err);
    }
});

router.get('/auditorium=:auditorium', async function (req, res, next) {
    console.log(req.params.auditorium);
    try {
        const data = await allShows.getShowByAuditoriumName(req.params.auditorium)
        res.send(data);
    } catch (err) {
        console.error('error while getting showings ', err.message);
        next(err);
    }
});

router.get('/price=:price', async function (req, res, next) {
    try {
        const data = await allShows.getShowByPrice(req.params.price)
        res.send(data);
    } catch (err) {
        console.error('error while getting showings ', err.message);
        next(err);
    }
});

// ============================= POST =================================

router.post('/', async function (req, res, next) {
    console.log("post show==========================================" + req.body);
    try {
        const data = await allShows.setNewShow(req.body)
        res.send(data);
    } catch (err) {
        console.error('error while getting showings ', err.message);
        next(err);
    }
});


router.put('/:id', async function (req, res, next) {
    try {
        let data = await allShows.addNewInShow(req.params.id);
        if (!data) {
            res.send("cannot add you to this show")
        }
        else {
            res.json(data);
        }
    } catch (err) {
        console.error('error in buying ticket', err.message);
        next(err);
    }
});




module.exports = router;