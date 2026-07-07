import express from 'express';
const router = express.Router(); 
import memberController from "./controllers/member.controller";

//router.get('/', memberController.goHome); 

//router.get('/login', memberController.goLogin); 

//router.get('/signup',memberController.getSignup); 



// CALLING PART -> REST API | Middle Ware 
// => Member
router.post("/member/login", memberController.login); 
router.post("/member/signup",memberController.signup);
router.post(
    "/member/logout",
    memberController.verifyAuth, 
    memberController.logout);
router.get("/member/detail", memberController.verifyAuth);


// => Product

// => Order
export default router; // modele.exports