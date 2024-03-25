const express = require('express')
const router = express.Router();
const email = require('../email')


router.post('/', async function (req, res, next) {
try {
        console.log("++++++++++++++++++++++++++++++++++++++++++")
        console.log("in 1")
        console.log("++++++++++++++++++++++++++++++++++++++++++")
        console.log("req.body =  " + req.body)
        email.sendEmail(req.body);

        console.log("++++++++++++++++++++++++++++++++++++++++++")
        console.log("out 1")
        console.log("++++++++++++++++++++++++++++++++++++++++++")
        //email.sendCopyToUser(req.body);
    } catch (err) {
        console.error('error in sending email ', err.message);
        next(err);
    }
});


module.exports = router;