import {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";

const restaurantController: T = {}; 
restaurantController.goHome = (req: Request, res:Response) => {
    try {
          console.log("goHome");
          // LOGIC 
          // Service Model
          // ... 
          res.send("Home Page");
    } catch (err){
        console.log("Error, goHome:", err);
    }
};

restaurantController.goLogin = (req: Request, res:Response) => {
    try {
          console.log("goLogin");
          res.send("Login Page");
    } catch (err){
        console.log("Error, goLogin:", err);
    }
};

restaurantController.getSignup = (req: Request, res:Response) => {
    try {
            console.log("getSignup");
          res.send("Signup Page");
    } catch (err){
        console.log("Error, getSignup:", err);
    }
};

export default restaurantController; 