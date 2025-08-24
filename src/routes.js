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

//ROUTES FOR COURSE
const CourseController = require("./controllers/CourseController");
routes.post("/course", CourseController.store);
routes.get("/course", CourseController.index);
routes.get("/course/search", CourseController.search);

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
