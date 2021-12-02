// CONTROLLERS

// checar username e password no body da request
// POST para criar um JTW 
// a ser devolvido na respose




const login = async (req, res) => {
	console.log('req.body = ', req.body);
	
	res.send({ msg: req.body });
};




module.exports = { login }



