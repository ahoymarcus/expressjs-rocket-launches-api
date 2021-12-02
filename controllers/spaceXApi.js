// CONTROLLERS
// https://docs.microsoft.com/en-us/connectors/rspacexip/#get-past-launches
// https://docs.microsoft.com/en-us/connectors/rspacexip/#get-latest-launch
// https://docs.microsoft.com/en-us/connectors/rspacexip/#get-next-launch
// https://docs.microsoft.com/en-us/connectors/rspacexip/#get-all-launches
// https://github.com/r-spacex/SpaceX-API/blob/master/routes/launches/v4/index.js
// https://codehandbook.org/how-to-make-rest-api-calls-in-express-web-app/
//https://stackoverflow.com/questions/44903053/how-to-call-an-api-from-another-api-in-expressjs



// require API_helper.js
const api_helper = require('../API_helper');


const url = "https://api.spacexdata.com/v4/launches/";



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


