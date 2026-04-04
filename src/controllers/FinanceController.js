const FinanceDate = require("../models/FinanceDate");
const FinanceReport = require("../models/FinanceReport");

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
      console.log(e);
      return res.status(500).send(e);
    }
  },

  async index(req, res) {
    try {
      const course = await Course.findAll();
      return res.send(course);
    } catch (e) {
      return res.status(500).send(e);
    }
  },

  async find(req, res) {
    try {
      const courseId = req.params.id;
      const course = await Course.findByPk(courseId);
      const students = await course.getStudents();

      return res.send({ students, course });
    } catch (e) {
      return res.status(500).send(e);
    }
  },

  async update(req, res) {
    try {
      const courseId = req.params.id;
      const course = await Course.findByPk(courseId);
      const courseData = req.body.course;
      if (!course) {
        return res.status(404).send({ error: "Aluno não encontrado" });
      }

      await course.update(courseData);

      return res.send({
        course,
      });
    } catch (e) {
      return res.status(500).send(e);
    }
  },

  async delete(req, res) {
    try {
      const courseId = req.params.id;

      // Busca todas as matrículas relacionadas ao estudante
      const registrations = await Registration.findAll({
        where: { id_course: courseId },
      });

      // Deleta todas as matrículas
      for (const registration of registrations) {
        await registration.destroy();
      }

      const course = await Course.findByPk(courseId);
      await course.destroy({});

      return res.send({ course });
    } catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
  },
};
