
// Receive a Controller Function
// And has access to its params req and res!!!
const asyncWrapper = (fn) => {
	return async (req, res, next) => {
		try {
			await fn(req, res, next);
		} catch (err) {
			console.log(err);
		}
	};
};



module.exports = asyncWrapper


