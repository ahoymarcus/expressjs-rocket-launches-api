// CONTROLLERS
const asyncWrapper = require('../middleware/async');

// require API_helper.js
const api_helper = require('../API_helper');




const getNextLaunch = asyncWrapper( async (req, res) => {
	// Get Next Launch URL
	const nextLaunchUrl = "https://api.spacexdata.com/v4/launches/next";
	
	const data = await api_helper.make_API_call(nextLaunchUrl);
	
	res.status(200).json(data);
});



const getNextLaunches = asyncWrapper( async (req, res) => {
	// Get Next Launches
	const nextLaunchesUrl = "https://api.spacexdata.com/v4/launches/upcoming";

	const data = await api_helper.make_API_call(nextLaunchesUrl);
	
	res.status(200).json(data);
});


const getLastLaunch = asyncWrapper( async (req, res) => {
	// Get Last Launch
	const lastLaunchUrl = "https://api.spacexdata.com/v4/launches/latest";
	
	const data = await api_helper.make_API_call(lastLaunchUrl);
	
	res.status(200).json(data);
});


const getPastLaunches = asyncWrapper( async (req, res) => {
	// Get Past Launches
	const pastLaunchesUrl = "https://api.spacexdata.com/v4/launches/past";
	
	const data = await api_helper.make_API_call(pastLaunchesUrl);
	
	res.status(200).json(data);
});




module.exports = {
	getNextLaunch,
	getNextLaunches,
	getLastLaunch,
	getPastLaunches
}


