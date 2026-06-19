import mongoose from "mongoose";
import { shapeIntoMongooseObjectId } from "../libs/config";
import Errors, { HttpCode, Message } from "../libs/Error";
import {
    Product,
    ProductInput,
    ProductUpdateInput
} from "../libs/types/product";
import ProductModel from "../schema/product.model";

class ProductService {
    private readonly productModel; 

    constructor() {
        this.productModel = ProductModel; 
    }

    // SPA 




    // BSSR 

    public async getAlProducts(): Promise<Product[]> {
        const result = await this.productModel.find().exec();
        if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

        return result; 
    }
    

      public async createNewProduct(input: ProductInput): Promise<Product> {
        try {
            return await this.productModel.create(input);

        } catch (err){
            console.error("Error, model:createNewProduct", err);
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }
    }

      public async updateChosenProduct(
        id: string | mongoose.Types.ObjectId,
        input: ProductUpdateInput
    ): Promise<Product> {
       // string => ObjectId 

       id = shapeIntoMongooseObjectId(id); 
       const result = await this.productModel
       .findOneAndUpdate({_id: id}, input, {new: true})
       .exec();
       if(!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED); 

       console.log("result:", result); 
       return result;
    }

}
  
export default ProductService;