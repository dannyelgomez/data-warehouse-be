const sequelize = require('../../db/connection');

const createCountry = async (req, res) => {
	const { name, region_id } = req.body;

	await sequelize.query(`INSERT INTO countries ( name, region_id ) 
    VALUES ('${name}','${region_id}')`)
		.then(response => {
			res.status(200).json('El país ha sido creado');
		}).catch(err => {
			res.status(500).json('Error al crear el país');
		});
}

const getCountryById = async (req, res) => {
	let id = req.params.id;
	await sequelize.query(`SELECT * FROM countries WHERE countries_id=${id}`, {
		type: sequelize.QueryTypes.SELECT
	})
		.then(result => {
			res.status(200).json(result);
		}).catch(err => {
			console.error(err);
			res.status(500).json('Error ejecutando el query');
		});
};

const getCountries = async (req, res) => {
	await sequelize.query(`SELECT * FROM countries`, {
		type: sequelize.QueryTypes.SELECT
	})
		.then(result => {
			res.status(200).json(result);
		}).catch(err => {
			console.error(err);
			res.status(500).json('Error ejecutando el query');
		});
};

const updateCountry = async (req, res) => {
	let id = req.params.id;
	const { name, region_id } = req.body;

	await sequelize.query(`UPDATE countries SET name='${name}', countries_id='${region_id}'
        WHERE countries_id=${id}`)
		.then(result => {
			res.status(200).json('País actualizado correctamente');
		}).catch(err => {
			console.log(err);
			res.status(500).json('Error ejecutando el query');
		});
};

const deleteCountry = async (req, res) => {
	let id = req.params.id;
	await sequelize.query(`DELETE FROM countries WHERE countries_id =${id}`)
		.then(resul => {
			res.status(200).json('País eliminado')
		}).catch(err => {
			res.status(500).json('Error ejecutando el query');
		})
};

module.exports = {
	createCountry,
	getCountryById,
	getCountries,
	updateCountry,
	deleteCountry
}