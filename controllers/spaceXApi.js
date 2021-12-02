// CONTROLLERS

const asyncWrapper = require('../middleware/async');

// require API_helper.js
const api_helper = require('../API_helper');


// Get All Launches
//const allLaunchesUrl = "https://api.spacexdata.com/v4/launches/";

// Get Next Launches
const nextLaunchesUrl = "https://api.spacexdata.com/v4/launches/upcoming";
// Get Last Launch
const lastLaunchUrl = "https://api.spacexdata.com/v4/launches/latest";
// Get Past Launches
const pastLaunchesUrl = "https://api.spacexdata.com/v4/launches/past";



const getAllLaunches = asyncWrapper( async (req, res) => {
	// Get Next Launch URL
	const nextLaunchUrl = "https://api.spacexdata.com/v4/launches/next";
	
	const data = await api_helper.make_API_call(nextLaunchUrl);
	
	res.status(200).json(data);
});










module.exports = getAllLaunches


