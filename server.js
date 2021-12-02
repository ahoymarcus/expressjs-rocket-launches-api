require('dotenv').config;
const express = require('express');

// login
const authRouter = require('./routes/login');

//const spaceXRouter = require('./routes/spaceXApi');
const launchesRouter = require('./routes/launches');


const server = express();

 
server.use(express.json());



server.get('/', (req, res) => {
	res.send('Rocket-X Launches API');
});


server.use('/api/v1/login', authRouter);
server.use('/api/v1/launches', launchesRouter);
//server.use('/api/v1/spaceXApi', spaceXRouter);



const  port = process.env.PORT || 3000;
 
server.listen(port, () => {
	console.log(`Server listening at port ${port}`);
}); 


