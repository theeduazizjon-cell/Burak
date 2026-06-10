import {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput} from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";


 const memberService = new MemberService();

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

restaurantController.getSignup = (req: Request, res:Response) => {
    try {
            console.log("getSignup");
          res.send("Signup Page");
    } catch (err){
        console.log("Error, getSignup:", err);
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


restaurantController.processSignup = async (req: Request, res:Response) => {
    try {
            console.log("processSignup");
            console.log("body:",req.body);

            const newMember = req.body;
            newMember.MemberType = MemberType.RESTAURANT;
            const result = await memberService.processSignup(newMember);
          
            res.send(result);
    } catch (err){
        console.log("Error, processSignup:", err);
        res.send(err);
    }
};

restaurantController.processLogin = async (req: Request, res:Response) => {
    try {
            console.log("processLogin");
            console.log("body,.req,body");
            const input: LoginInput = req.body;

           
            const result = await memberService.processLogin(input);


          res.send(result);
    } catch (err){
        console.log("Error, processLogin:", err);
        res.send(err);
    }
};



export default restaurantController; 