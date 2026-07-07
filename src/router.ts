import express from 'express';
const router = express.Router(); 
import memberController from "./controllers/member.controller";

//router.get('/', memberController.goHome); 

//router.get('/login', memberController.goLogin); 

//router.get('/signup',memberController.getSignup); 



// CALLING PART -> REST API 
// => Member
router.post("/member/login", memberController.login); 
router.post("/member/signup",memberController.signup);
router.get("/member/detail", memberController.verifyAuth);


// => Product

// => Order
export default router; // modele.exports