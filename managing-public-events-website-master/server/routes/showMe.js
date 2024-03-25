const express = require('express');
const router = express.Router();
const showme = require('../services/showme');

/* GET programming languages. */
router.get('/', async function (req, res, next) {
  try {
    const data = await showme.getMultiple(req.query.page)
    res.send(data);
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;