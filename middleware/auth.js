// definir acesso apenas aos que possuem 
// um token JWT em suas requisições
const jwt = require('jsonwebtoken');



const authenticationMiddlware = async (req, res, next) => {
	console.log('req.headers = ', req.headers);
	
	const authHeader = req.headers.authorization;
	
	// 401 - Erro de Autenticação
	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		return res.status(401).send('Acesso não permitido');
	}
	
	next();
};



module.exports = authenticationMiddlware


