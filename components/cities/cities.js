const sequelize = require('../../db/connection');

const createCity = async (req, res) => {
	let { name, countries_id } = req.body;

	await sequelize.query(`INSERT INTO cities ( name, countries_id ) 
        VALUES ('${name}','${countries_id}')`)
		.then(response => {
			res.status(200).json('La Ciudad ha sido creado');
		}).catch(err => {
			res.status(500).json('Error al crear el país');
		});
}


const getCityById = async (req, res) => {
	let id = req.params.id;
	await sequelize.query(`SELECT * FROM cities WHERE cities_id=${id}`, {
		type: sequelize.QueryTypes.SELECT
	})
		.then(result => {
			res.status(200).json(result);
		}).catch(err => {
			console.error(err);
			res.status(500).json('Error ejecutando el query');
		});
};

const getCities = async (req, res) => {
	await sequelize.query(`SELECT * FROM cities`, {
		type: sequelize.QueryTypes.SELECT
	})
		.then(result => {
			res.status(200).json(result);
		}).catch(err => {
			console.error(err);
			res.status(500).json('Error ejecutando el query');
		});
};

const updateCity = async (req, res) => {
	const id = req.params.id;
	const { name, countries_id } = req.body;

	await sequelize.query(`UPDATE cities SET name='${name}', cities_id='${countries_id}'
        WHERE cities_id=${id}`)
			.then(result => {
				res.status(200).json('Ciudad actualizada correctamente');
			}).catch(err => {
				console.log(err);
				res.status(500).json('Error ejecutando el query');
			});
};

const deleteCity = async (req, res) => {
	let id = req.params.id;
	await sequelize.query(`DELETE FROM cities WHERE cities_id =${id}`)
		.then(resul => {
			res.status(200).json('Ciudad eliminada')
		}).catch(err => {
			res.status(500).json('Error ejecutando el query');
		})
};

module.exports = {
	createCity,
	getCityById,
	getCities,
	updateCity,
	deleteCity,
}