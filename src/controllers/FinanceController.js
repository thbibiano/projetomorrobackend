const FinanceDate = require("../models/FinanceDate");
const FinanceReport = require("../models/FinanceReport");
const ErrorValidation = require("../middlewares/errorvalidation");

module.exports = {
  async store(req, res) {
    try {
      const { name, value, year, month, is_donation } = req.body;

      const [date] = await FinanceDate.findOrCreate({
        where: {
          year: year,
          month: month,
        },
      });

      const report = FinanceReport.build({
        is_donation,
        name,
        value,
        id_financedate: date.id,
      });

      await report.save();

      return res.send({ date, report });
    } catch (e) {
      return ErrorValidation(e, res);
    }
  },

  async deleteFinance(req, res) {
    try {
      const financeId = req.params.id;
      const finance = await FinanceReport.findByPk(financeId);

      if (!finance) {
        return res
          .status(404)
          .send({ error: "Dado financeiro não encontrada" });
      }

      finance.destroy();
      return res.status(200).send({ deleted: true });
    } catch (e) {
      return ErrorValidation(e, res);
    }
  },

  async indexDate(req, res) {
    try {
      const dates = await FinanceDate.findAll();
      return res.send(dates);
    } catch (e) {
      return ErrorValidation(e, res);
    }
  },

  async index(req, res) {
    const financeId = req.params.id;
    try {
      const finance = await FinanceReport.findAll({
        where: {
          id_financedate: financeId,
        },
      });
      return res.send(finance);
    } catch (e) {
      return ErrorValidation(e, res);
    }
  },

  async saveDates(req, res) {
    try {
      const { year, month } = req.body;
      const [date] = await FinanceDate.findOrCreate({
        where: {
          year: year,
          month: month,
        },
      });
      return res.send(date);
    } catch (e) {
      return ErrorValidation(e, res);
    }
  },
};
