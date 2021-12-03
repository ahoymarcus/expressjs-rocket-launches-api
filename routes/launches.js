// ROUTE
const express = require('express');

const {
	getNextLaunch,
	getNextLaunches,
	getLastLaunch,
	getPastLaunches
} = require('../controllers/launches');
const authMiddleware = require('../middleware/auth');


const router = express.Router();


router.get('/next', authMiddleware, getNextLaunches);
router.get('/next-list', authMiddleware, getNextLaunches);
router.get('/last', authMiddleware, getLastLaunch);
router.get('/past', authMiddleware, getPastLaunches);




module.exports = router



