// definir acesso apenas aos que possuem 
// um token JWT em suas requisições
const jwt = require('jsonwebtoken');



const authenticationMiddlware = async (req, res, next) => {
	console.log('req.headers = ', req.headers);
	
	const authHeader = req.headers.authorization;
	
	// 401 - Erro de Autenticação
	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		return res.status(401).send('No valid token provided');
	}
	
	const token = authHeader.split(' ')[1];
	
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		
		console.log('decoded.....', decoded);
		
		const { id, username } = decoded;
		req.user = { id, username };
		
		next();
	} catch (err) {
		return res.status(401).send('Access not authorized');
	}
};



module.exports = authenticationMiddlware


