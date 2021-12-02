// CONTROLLERS


// require API_helper.js
const api_helper = require('../API_helper');


// Get All Launches
//const url = "https://api.spacexdata.com/v4/launches/";
// Get Next Launch
const nextLaunchUrl = "https://api.spacexdata.com/v4/launches/next";
// Get Next Launches
const nextLaunchesUrl = "https://api.spacexdata.com/v4/launches/upcoming";
// Get Last Launch
const lastLaunchUrl = "https://api.spacexdata.com/v4/launches/latest";
// Get Past Launches
const pastLaunchesUrl = "https://api.spacexdata.com/v4/launches/past";



const getAllLaunches = async (req, res) => {
	//res.status(200).send('getAllLaunches');
	
	api_helper.make_API_call(url)
		.then(response => {
			res.json(response);
		})
		.catch(error => {
			res.send(error);
		});
};



module.exports = getAllLaunches


