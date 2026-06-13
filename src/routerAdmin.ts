import express from 'express';
const routerAdmin = express.Router(); 
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";

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
routerAdmin.get("/products/all", 
    restaurantController.verifyRestaurant, 
    productController.getAllProducts
); 

routerAdmin.post("/product.create", productController.createNewProduct); 
routerAdmin.post("/product/:id", productController.updateChosenProduct);

// User //
export default routerAdmin; // modele.exports