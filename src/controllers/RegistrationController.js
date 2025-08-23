const Registration = require("../models/Registration");
const Student = require("../models/Student");
const Course = require("../models/Course");
const { Op } = require("sequelize");

module.exports = {
  async store(req, res) {
    try {
      const { id_student, id_course } = req.body;

      const student = await Student.findByPk(id_student);

      if (!student) {
        return res.status(400).send({ error: "Aluno não cadastrado" });
      }

      const course = await Course.findByPk(id_course);

      if (!course) {
        return res.status(400).send({ error: "Curso não cadastrado" });
      }

      const alreadyRegistrated = await Registration.findOne({
        where: {
          id_student: id_student,
          id_course: id_course,
        },
      });

      if (alreadyRegistrated) {
        return res
          .status(400)
          .send({ error: "Aluno já está matriculado nesse curso" });
      }

      console.log(course);
      const data = await course.addStudent(student);
      return res.send({ ...data });
    } catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
  },

  async index(req, res) {
    try {
      const registrations = await Registration.findAll();
      return res.send(registrations);
    } catch (e) {
      return res.status(500).send(e);
    }
  },

  async studentsNotRegistred(req, res) {
    try {
      const courseID = req.params.id;
      const course = await Course.findByPk(courseID, {
        include: {
          model: Student,
          as: "students",
          attributes: ["id"],
        },
      });

      if (!course) {
        return res.status(404).send({ error: "Curso não encontrado" });
      }

      const registeredStudentIds = course.students.map((student) => student.id);

      const unregisteredStudents = await Student.findAll({
        where: {
          id: {
            [Op.notIn]: registeredStudentIds.length
              ? registeredStudentIds
              : [0],
          },
        },
      });

      return res.send(unregisteredStudents);
    } catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
  },

  async addStudents(req, res) {
    try {
      console.log("ui");
      const courseID = req.params.id;
      const studentIDs = req.body.students;

      const course = await Course.findByPk(courseID);
      if (!course) {
        return res.status(404).send({ error: "Curso não encontrado" });
      }

      const students = await Student.findAll({
        where: { id: studentIDs },
      });

      const r = await course.addStudents(students);

      return res.send(r);
    } catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
  },
};
