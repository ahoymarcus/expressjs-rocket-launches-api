// CONTROLLERS

// checar username e password no body da request
// POST para criar um JTW 
// a ser devolvido na respose




const login = async (req, res) => {
	console.log('req.body = ', req.body);
	
	const { username, password } = req.body;
	
	if (!username || !password) {
		return res.status(401).send('Unauthorized');
	}
	
	
	
	res.send({ msg: 'user created'});
};




module.exports = { login }



