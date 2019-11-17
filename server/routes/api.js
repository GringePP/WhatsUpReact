const express = require("express");
const router = express.Router();

const foodHanlder = require("../handlers/food");

router.get('/food', foodHanlder);

module.exports = router;
