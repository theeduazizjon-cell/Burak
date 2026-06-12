import express from 'express';
const routerAdmin = express.Router(); 
import restaurantController from "./controllers/restaurant.controller";

// Restaurant members // 
routerAdmin.get('/', restaurantController.goHome); 

routerAdmin
.get('/login', restaurantController.goLogin)
.post('/login', restaurantController.processLogin); 

routerAdmin
.get('/signup',restaurantController.getSignup)
.post('/signup', restaurantController.processSignup); 
 
routerAdmin.get("/check-me", restaurantController.checkAuthSession);
routerAdmin.get("/logout",restaurantController.logout);
// Products // 

// User //
export default routerAdmin; // modele.exports