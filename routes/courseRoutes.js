import express from 'express'
import { addLecture, createCourse, deleteCourse, deleteLecture, getAllCourseLectures, getAllCourses } from '../controllers/courseController.js';
import singleUpload from '../middlewares/multer.js';
import { authorizeAdmin, authorizeSubscribers, isAuthenticated } from '../middlewares/Auth.js';

const router=express.Router();

//get all courses without lectures
router.route("/courses").get(getAllCourses);

//create new course only admin
router.route("/createcourse").post(isAuthenticated, authorizeAdmin, singleUpload, createCourse);

//get all lectures
router.route("/course/:id").get(isAuthenticated,authorizeSubscribers,getAllCourseLectures).post(isAuthenticated,authorizeAdmin,singleUpload,addLecture).delete(isAuthenticated,authorizeAdmin,deleteCourse);

//create new course only admin
router.route("/lecture").delete(isAuthenticated, authorizeAdmin,deleteLecture);

export default router;