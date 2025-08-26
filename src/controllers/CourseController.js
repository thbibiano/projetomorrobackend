const Course = require("../models/Course");

module.exports = {
  async store(req, res) {
    try {
      const {
        name,
        description,
        teacher,
        init_date,
        end_date,
        init_hour,
        end_hour,
        total_hours,
      } = req.body;

      const course = Course.build({
        name,
        description,
        teacher,
        init_date,
        end_date,
        init_hour,
        end_hour,
        total_hours,
        is_active: true,
      });

      await course.save();
      return res.send({ ...course });
    } catch (e) {
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
      const course = await Course.destroy(courseId);

      return res.send({ course });
    } catch (e) {
      return res.status(500).send(e);
    }
  },
};
