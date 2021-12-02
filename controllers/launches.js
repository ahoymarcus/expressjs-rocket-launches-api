// CONTROLLERS
// https://docs.microsoft.com/en-us/connectors/rspacexip/#get-past-launches
// https://docs.microsoft.com/en-us/connectors/rspacexip/#get-latest-launch
// https://docs.microsoft.com/en-us/connectors/rspacexip/#get-next-launch
// https://docs.microsoft.com/en-us/connectors/rspacexip/#get-all-launches
// https://github.com/r-spacex/SpaceX-API/blob/master/routes/launches/v4/index.js
// https://codehandbook.org/how-to-make-rest-api-calls-in-express-web-app/
//https://stackoverflow.com/questions/44903053/how-to-call-an-api-from-another-api-in-expressjs




const url = "https://api.spacexdata.com/v4/launches/";



const getNextLaunches = async (req, res) => {
	
	res.status(200).send('getNextLaunches');
	
	// try {
		// const response = await fetch(url);
		// const launches = await response.json();
		
		// console.log(launches);
		
	
	// } catch (error) {
		// console.log(error);
	// }
};



module.exports = getNextLaunches


