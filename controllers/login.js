// CONTROLLERS
require('dotenv').config();

// checar username e password no body da request
// POST para criar um JTW 
// a ser devolvido na respose
const jwt = require('jsonwebtoken');





const login = async (req, res) => {
	console.log('req.body = ', req.body);
	
	const { username, password } = req.body;
	
	if (!username || !password) {
		return res.status(401).send('Unauthorized');
	}
	
	// mockando um Id
	const id = new Date().getDate();
	
	const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' });
	
	res.send({ msg: 'user created', token });
};




module.exports = { login }



