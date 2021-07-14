const sequelize = require('../../db/connection');

const createCompany = async (req, res) => {
  const { nit, name, phone, email, address, cities_id } = req.body;

  await sequelize.query(`INSERT INTO companies ( nit, name, phone, email, address, cities_id ) 
    VALUES ('${nit}','${name}','${phone}','${email}','${address}','${cities_id}')`)
    .then(response => {
      res.status(200).json('La compañía ha sido creada');
    }).catch(err => {
      res.status(500).json('Error al crear la compañía');
    });
}

const getCompanyById = async (req, res) => {
  let id = req.params.id;
  await sequelize.query(`SELECT * FROM companies WHERE companies_id=${id}`, {
    type: sequelize.QueryTypes.SELECT
  })
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      console.error(err);
      res.status(500).json('Error ejecutando el query');
    });
};

const getCompanies = async (req, res) => {
  await sequelize.query(`SELECT * FROM companies`, {
    type: sequelize.QueryTypes.SELECT
  })
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      console.error(err);
      res.status(500).json('Error ejecutando el query');
    });
};

const updateCompany = async (req, res) => {
  const id = req.params.id;
  const { nit, name, phone, email, address } = req.body;

  await sequelize.query(`UPDATE companies SET nit='${nit}', name='${name}', phone='${phone}', email='${email}', address='${address}'
    WHERE companies_id=${id}`)
    .then(result => {
      res.status(200).json('Se ha actualizado correctamente');
    }).catch(err => {
      console.log(err)
      res.status(500).json('Error ejecutando el query');
    });

};

const deleteCompany = async (req, res) => {
  let id = req.params.id;
  await sequelize.query(`DELETE FROM companies WHERE companies_id =${id}`)
    .then(resul => {
      res.status(200).json('Compañía eliminada')
    }).catch(err => {
      res.status(500).json('Error ejecutando el query');
    })
};

module.exports = {
  createCompany,
  getCompanyById,
  getCompanies,
  updateCompany,
  deleteCompany,
}