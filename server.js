require('dotenv').config;
const express = require('express');

const spaceXRoute = require('./routes/spaceXApi');
const launchesRoute = require('./routes/launches');


const server = express();


server.use(express.json());



server.get('/', (req, res) => {
	res.send('SpaceX');
});


server.use('/api/v1/spaceXApi', spaceXRoute);
server.use('/api/v1/launches', launchesRoute);




const  port = process.env.PORT || 3000;
 
server.listen(port, () => {
	console.log(`Server listening at port ${port}`);
}); 


