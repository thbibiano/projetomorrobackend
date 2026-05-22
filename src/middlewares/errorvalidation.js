const ErrorValidation = function (error, res) {
  console.log(error, "erro");
  if (error && error.name == "SequelizeUniqueConstraintError") {
    return res.status(400).send({
      error: `Não é permitido cadastrar dados iguais: ${error.original.detail}`,
      r: error,
    });
  }
  if (error && error.name == "SequelizeDatabaseError") {
    return res.status(400).send({
      error: `Campos inválidos`,
      r: error,
    });
  }
  return res.status(500).send();
};

module.exports = ErrorValidation;
