const  express = require('express')
const courseRoute=express.Router()

const {protect} = require('../middleware/authMiddleware')
const { getCourse, createCourse,updateCourse,deleteCourse,getCourseById} = require('../controllers/courseControllers')

courseRoute.get("/",getCourse)
courseRoute.post("/",createCourse)
courseRoute.get("/:id",getCourseById)

courseRoute.put("/:id",updateCourse)
courseRoute.delete("/:id",deleteCourse)


module.exports = courseRoute