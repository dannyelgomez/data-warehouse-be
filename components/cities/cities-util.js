const sequelize = require('../../db/connection');

const validateCity = (req, res, next) => {
  const { name, countries_id } = req.body;

  if (!name || !countries_id) {
    res.status(400).json('Petición incompleta o equivocada');
  } else {
    next();
  }
};

const cityIdParams = (req, res, next) => {
  const id = req.params.id;
  if (!id || (id && !is_numeric(id))) {
    res.status(400).json('Petición incompleta o equivocada');
  } else {
    next();
  }
};

const cityExists = async (req, res, next) => {
  const id = parseInt(req.params.id);
  await sequelize.query(
    `SELECT 1 FROM cities WHERE cities_id=${id}`, { type: sequelize.QueryTypes.SELECT }
  )
    .then(result => {
      if (result && result.length > 0) {
        next();
      } else {
        res.status(404).json('Ciudad not found');
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
  cityIdParams,
  cityExists,
  validateCity
}