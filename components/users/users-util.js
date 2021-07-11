const sequelize = require('../../db/connection');

const validateUser = (req, res, next) => {
  const { username, password, first_name, last_name, email, role, is_active } = req.body;

  if (!username || !password || !first_name || !last_name || !email || !role || !is_active) {
    res.status(400).json('Petición incompleta o equivocada');
  } else {
    next();
  }
};

const userIdParams = (req, res, next) => {
  const id = req.params.id;

  if (!id || (id && !is_numeric(id))) {
    res.status(400).json('Petición incompleta o equivocada');
  } else {
    next();
  }
};

const userExists = async (req, res, next) => {
  const id = parseInt(req.params.id);

  await sequelize.query(
    `SELECT 1 FROM users WHERE user_id=${id}`,
    { type: sequelize.QueryTypes.SELECT }
  )
  .then(result => {
    if (result && result.length > 0) {
      next();
    } else {
      res.status(404).json('User not found');
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
  validateUser,
  userIdParams,
  userExists
}