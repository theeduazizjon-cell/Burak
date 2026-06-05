import {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import MemberType  from "../libs/types/member";


const restaurantController: T = {}; 
restaurantController.goHome = (req: Request, res:Response) => {
    try {
          console.log("goHome"); // send | json | redirect | render 
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


restaurantController.processLogin = (req: Request, res:Response) => {
    try {
            console.log("processLogin");
          res.send("DONE!");
    } catch (err){
        console.log("Error, processLogin:", err);
    }
};

restaurantController.processSignup = async (req: Request, res:Response) => {
    try {
            console.log("processSignup");
            console.log("body:",req.body);

            const newMember = req.body;
            newMember.MemberType = MemberType.RESTAURANT;

            const memberService = new MemberService();
            const result =await memberService.processSignup(newMember);
          
            res.send("DONE!");
    } catch (err){
        console.log("Error, processSignup:", err);
    }
};

export default restaurantController; 