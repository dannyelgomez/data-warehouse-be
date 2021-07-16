const sequelize = require('../../db/connection');

const createRegion = async (req, res) => {
	let { name } = req.body;

	await sequelize.query(`INSERT INTO region ( name ) 
    VALUES ('${name}')`)
		.then(response => {
			res.status(200).json('La región ha sido creada');
		}).catch(err => {
			res.status(500).json('Error al crear la región');
		});
}

const getRegionById = async (req, res) => {
	let id = req.params.id;
	await sequelize.query(`SELECT * FROM region WHERE region_id=${id}`, {
		type: sequelize.QueryTypes.SELECT
	})
		.then(result => {
			res.status(200).json(result);
		}).catch(err => {
			console.error(err);
			res.status(500).json('Error ejecutando el query');
		});
};

const getRegions = async (req, res) => {
	await sequelize.query(`SELECT * FROM region`, {
		type: sequelize.QueryTypes.SELECT
	})
		.then(result => {
			res.status(200).json(result);
		}).catch(err => {
			console.error(err);
			res.status(500).json('Error ejecutando el query');
		});
};

const updateRegion = async (req, res) => {
	let id = req.params.id;
	const { name } = req.body;

	await sequelize.query(`UPDATE region SET name='${name}'
		WHERE region_id=${id}`)
		.then(result => {
			res.status(200).json('Registro actualizado correctamente');
		}).catch(err => {
			console.log(err);
			res.status(500).json('Error ejecutando el query');
		});
};

const deleteRegion = async (req, res) => {
	let id = req.params.id;
	await sequelize.query(`DELETE FROM region WHERE region_id =${id}`)
		.then(result => {
			res.status(200).json('Región eliminada')
		}).catch(err => {
			res.status(500).json('Error ejecutando el query');
		})
};

module.exports = {
	createRegion,
	getRegionById,
	getRegions,
	updateRegion,
	deleteRegion
}