import { T } from "../libs/types/common";
import Errors, {HttpCode, Message} from "../libs/Error";
import {Request, Response } from "express"; 
import ProductService from "../models/product.service";
import { AdminRequest } from "../libs/types/member";
import { ProductInput } from "../libs/types/product";


const productController: T = {}; 

const productService = new ProductService();

// SPA 


// BSSR 

productController.getAllProducts = async (req: AdminRequest, res:Response) => {
    try {
            console.log("getAllProducts");
            const data = await productService.getAlProducts();
            console.log("data:", data)


            res.render("products", {products: data});
    } catch (err){
        console.log("Error , getAllProducts", err);
        if (err instanceof Errors) res.status(err.code).json(err); 
        else res.status(Errors.standard.code).json(Errors.standard);
      
    }

};


productController.createNewProduct = async (
    req: AdminRequest, 
    res:Response
) => {
    try {
            console.log("createNewProducts");
            if(!req.files?.length) 
                throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);

            const data: ProductInput = req.body;
            data.productImages = req.files?.map(ele => {
                return ele.path.replace(/\\/g, "/"); // for windows users , so they can get easier visual response 
            });

            await  productService.createNewProduct(data);

             res.send(
            `<script> alert("Successful creation!"); window.location.replace('admin/product/all) </script>`
        );

    } catch (err){
        console.log("Error , createNewProducts", err);
        const message = 
            err instanceof Errors ? err.message: Message.SOMETHING_WENT_WRONG;
        res.send(
            `<script> alert("${message}"); window.location.replace('admin/product/all) </script>`
        );

    }

};


productController.updateChosenProduct = async (req: Request, res:Response) => {
    try {
            console.log("updateChosenProducts");
            const id = req.params.id! as string;
            
            const result = await productService.updateChosenProduct(id, req.body);

            res.status(HttpCode.OK).json({data: result});
    } catch (err){
        console.log("Error , updateChosenProducts", err);
        if (err instanceof Errors) res.status(err.code).json(err); 
        else res.status(Errors.standard.code).json(Errors.standard);
      
    }

};

export default productController; 

