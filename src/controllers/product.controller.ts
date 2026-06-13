import { T } from "../libs/types/common";
import Errors from "../libs/Error";
import {Request, Response } from "express"; 
import ProductService from "../models/product.service";
import { AdminRequest } from "../libs/types/member";


const productController: T = {}; 
const productService = new ProductService();

productController.getAllProducts = async (req: AdminRequest, res:Response) => {
    try {
            console.log("getAllProducts");
            console.log("req.member", req.member);
            res.render("products");
    } catch (err){
        console.log("Error , getAllProducts", err);
        if (err instanceof Errors) res.status(err.code).json(err); 
        else res.status(Errors.standard.code).json(Errors.standard);
      
    }

};


productController.createNewProduct = async (req: Request, res:Response) => {
    try {
            console.log("createNewProducts");
            res.send("DONE!");
    } catch (err){
        console.log("Error , createNewProducts", err);
        if (err instanceof Errors) res.status(err.code).json(err); 
        else res.status(Errors.standard.code).json(Errors.standard);
      
    }

};


productController.updateChosenProduct = async (req: Request, res:Response) => {
    try {
            console.log("updateChosenProducts");
    } catch (err){
        console.log("Error , updateChosenProducts", err);
        if (err instanceof Errors) res.status(err.code).json(err); 
        else res.status(Errors.standard.code).json(Errors.standard);
      
    }

};

export default productController; 

