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

  async search(req, res) {
    try {
      console.log(req);
      const course = await Course.findAll();
      return res.send(course);
    } catch (e) {
      return res.status(500).send(e);
    }
  },
};
