require('dotenv').config();
const express = require('express');

// extra security packages
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

// login
const authRouter = require('./routes/login');

//const spaceXRouter = require('./routes/spaceXApi');
const launchesRouter = require('./routes/launches');


const server = express();

// security
server.set('trust proxy', 1); // config for Heroku's apps
server.use(rateLimiter({
	windowMs: 15 * 60 * 1000, // 15 minutes
		max: 100, // limit each IP to 100 requests per windowMs
}));

server.use(express.json());

// security
server.use(helmet());
server.use(cors());
server.use(xss());



server.get('/', (req, res) => {
	res.send('Rocket-X Launches API');
}); 


server.use('/api/v1/login', authRouter);
server.use('/api/v1/launches', launchesRouter);
//server.use('/api/v1/spaceXApi', spaceXRouter);



const port = process.env.PORT || 5000;
 
server.listen(port, () => {
	console.log(`Server listening at port ${port}`);
});  


