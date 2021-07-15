const sequelize = require('../../db/connection');

const validateCompany = (req, res, next) => {
	const { nit, name, phone, email, address, cities_id } = req.body;

	if (!nit || !name || !phone || !email || !address || !cities_id) {
		res.status(400).json('Petición incompleta o equivocada');
	} else {
		next();
	}
};

const companyIdParams = async (req, res, next) => {
	let id = req.params.id;
	if (!id || (id && !is_numeric(id))) {
		res.status(400).json('Petición incompleta o equivocada');
	} else {
		next();
	}
};

const companyExists = async (req, res, next) => {
	const id = parseInt(req.params.id);
	await sequelize.query(
		`SELECT 1 FROM companies WHERE companies_id=${id}`, { type: sequelize.QueryTypes.SELECT }
	)
		.then(result => {
			if (result && result.length > 0) {
				next();
			} else {
				res.status(404).json('Company not found');
			}
		}).catch(err => {
			console.log(err);
			res.status(500).json('Error ejecutando el query');
		});
};


function is_numeric(value) {
	return !isNaN(parseFloat(value)) && isFinite(value) ? value : !isNaN(parseFloat(value)) && isFinite(value);
}

module.exports = {
	companyIdParams,
	companyExists,
	validateCompany
}