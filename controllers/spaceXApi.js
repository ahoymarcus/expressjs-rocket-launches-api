// CONTROLLERS

const asyncWrapper = require('../middleware/async');

// require API_helper.js
const api_helper = require('../API_helper');



const getAllLaunches = asyncWrapper( async (req, res) => {
	// Get All Launches
	//const allLaunchesUrl = "https://api.spacexdata.com/v4/launches/";
	
	const data = await api_helper.make_API_call(allLaunchesUrl);
	
	res.status(200).json(data);
});




module.exports = getAllLaunches


