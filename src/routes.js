const { Router } = require("express");
const routes = Router();
const authRouter = require("./middlewares/autentication");
//const multer = require('multer')
//const multerConfig = require('./config/multer')

//authentication middleware
routes.use(authRouter);

//ROUTES FOR STUDENT
const StudentController = require("./controllers/StudentController");
routes.post("/student", StudentController.store);
routes.get("/student", StudentController.index);
routes.post("/student/register/:id", StudentController.register);
routes.get("/student/:id", StudentController.find);
routes.post("/student/update/:id", StudentController.update);

//ROUTES FOR COURSE
const CourseController = require("./controllers/CourseController");
routes.post("/course", CourseController.store);
routes.get("/course", CourseController.index);
routes.get("/course/:id", CourseController.find);
routes.post("/course/update/:id", CourseController.update);
routes.delete("/course/:id", CourseController.delete);

//ROUTES FOR REGISTRATION
const RegistrationController = require("./controllers/RegistrationController");
routes.post("/registration", RegistrationController.store);
routes.get("/registration", RegistrationController.index);
routes.get("/registration/:id", RegistrationController.studentsNotRegistred);
routes.post(
  "/registration/addStudents/:id",
  RegistrationController.addStudents
);

module.exports = routes;
