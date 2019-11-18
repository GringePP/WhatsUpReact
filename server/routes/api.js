const express = require("express");
const router = express.Router();

const foodHanlder = require("../handlers/food");

router.get('/food/:foodId', foodHanlder);

module.exports = router;
