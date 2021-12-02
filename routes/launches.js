// ROUTE
// https://docs.microsoft.com/en-us/connectors/rspacexip/#get-past-launches
// https://docs.microsoft.com/en-us/connectors/rspacexip/#get-latest-launch
// https://docs.microsoft.com/en-us/connectors/rspacexip/#get-next-launch
// https://docs.microsoft.com/en-us/connectors/rspacexip/#get-all-launches
// https://github.com/r-spacex/SpaceX-API/blob/master/routes/launches/v4/index.js

const express = require('express');

const getNextLaunches = require('../controllers/launches');



const router = express.Router();


router.route('/').get(getNextLaunches);



module.exports = router



