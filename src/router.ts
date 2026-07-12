import express from 'express';
const router = express.Router(); 
import memberController from "./controllers/member.controller";
import uploader from "./libs/utils/uploader"; 
import productController from './controllers/product.controller';

//router.get('/', memberController.goHome); 

//router.get('/login', memberController.goLogin); 

//router.get('/signup',memberController.getSignup); 



// CALLING PART -> REST API | Middle Ware 
// => Member
router.get("/member/restaurant", memberController.getRestauarant);
router.post("/member/login", memberController.login); 
router.post("/member/signup",memberController.signup);
router.post(
    "/member/logout",
    memberController.logout);
router.get(
    "/member/detail", 
    memberController.verifyAuth, 
    memberController.getMemberDetail
);

router.get(
    "/member/update", 
    memberController.verifyAuth, 
    uploader("members").single("memberImage")
); 

router.get("/member/top-users",memberController.getTopUsers);

// => Product

router.get("/product/all", productController.getProducts);

// => Order
export default router; // modele.exports