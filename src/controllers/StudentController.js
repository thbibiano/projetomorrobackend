const Course = require("../models/Course");
const Student = require("../models/Student");

module.exports = {
  async store(req, res) {
    try {
      const {
        name,
        cpf,
        phone,
        celphone,
        cep,
        family_income,
        city,
        house_number,
        neighborhood,
        state,
      } = req.body;

      const student = Student.build({
        name,
        cpf,
        phone,
        celphone,
        cep,
        family_income,
        city,
        house_number,
        neighborhood,
        state,
      });

      await student.save();
      return res.send({ ...student });
    } catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
  },

  async index(req, res) {
    try {
      const students = await Student.findAll();
      return res.send(students);
    } catch (e) {
      return res.status(500).send(e);
    }
  },

  async register(req, res) {
    try {
      const studentId = req.params.id;
      const courseIds = req.body.courses;
      const student = await Student.findByPk(studentId);

      if (!student) {
        return res.status(404).send({ error: "Aluno não encontrado" });
      }

      const courses = await Course.findAll({
        where: { id: courseIds },
      });

      const r = await student.addCourses(courses);
      return res.send(r);
    } catch (e) {
      //console.log(e);
      return res.status(500).send(e);
    }
  },

  async find(req, res) {
    try {
      const studentId = req.params.id;
      const student = await Student.findByPk(studentId);
      const courses = await student.getCourses();

      return res.send({ student, courses });
    } catch (e) {
      return res.status(500).send(e);
    }
  },
};
