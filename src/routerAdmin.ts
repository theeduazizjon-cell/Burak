 import express from 'express';
const routerAdmin = express.Router(); 
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
import makeUploader from './libs/utils/uploader';

// Restaurant members // 
routerAdmin.get('/', restaurantController.goHome); 

routerAdmin
.get('/login', restaurantController.goLogin)
.post('/login', restaurantController.processLogin); 

routerAdmin
.get('/signup',restaurantController.getSignup)
.post(
    "/signup", 
    makeUploader("member").single("memberImage"),
    restaurantController.processSignup
);
 
routerAdmin.get("/check-me", restaurantController.checkAuthSession);
routerAdmin.get("/logout",restaurantController.logout);


// Products // 
routerAdmin.get("/products/all", 
    restaurantController.verifyRestaurant, 
    productController.getAllProducts
); 

routerAdmin.post("/product/create",
     restaurantController.verifyRestaurant, 
     // makeUploader.single('productImage'),
     makeUploader("products").array("productImages", 5),
     productController.createNewProduct
    ); 

routerAdmin.post(
    "/product/:id", 
    restaurantController.verifyRestaurant, 
    productController.updateChosenProduct);



// User //

routerAdmin.get(
    "/user/all", 
    restaurantController.verifyRestaurant,
    restaurantController.getUsers);

export default routerAdmin; // modele.exportss