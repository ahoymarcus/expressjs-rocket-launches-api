// ROUTE
const express = require('express');

const {
	getNextLaunch,
	getNextLaunches,
	getLastLaunch,
	getPastLaunches
} = require('../controllers/launches');



const router = express.Router();


router.get('/next', getNextLaunches);
router.get('/next-list', getNextLaunches);
router.get('/last', getLastLaunch);
router.get('/past', getPastLaunches);




module.exports = router



