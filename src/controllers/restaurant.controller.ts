import {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, AdminRequest, MemberInput} from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import {Message} from "../libs/Error";
 const memberService = new MemberService();

const restaurantController: T = {}; 
restaurantController.goHome = (req: AdminRequest, res:Response) => {
    try {
          console.log("goHome"); // send | json | redirect | render 
          // LOGIC 
          // Service Model
          // ... 
          res.render("home");
    } catch (err){
        console.log("Error, goHome:", err);
    }
};

restaurantController.getSignup = (req: AdminRequest, res:Response) => {
    try {
            console.log("getSignup");
          res.render("signup");
    } catch (err){
        console.log("Error, getSignup:", err);
    }
};

restaurantController.goLogin = (req: AdminRequest, res:Response) => {
    try {
          console.log("goLogin");
          res.render("login");
    } catch (err){
        console.log("Error, goLogin:", err);
    }
};


restaurantController.processSignup = async (req: AdminRequest, res:Response) => {
    try {
            console.log("processSignup");
            console.log("body:",req.body);

            const newMember = req.body;
            newMember.MemberType = MemberType.RESTAURANT;
            const result = await memberService.processSignup(newMember);
            // TO DO: SESSIONS AUTHENTIFICATION 

            req.session.member = result; 
            req.session.save(function(){
                res.send(result);
            });

          
            res.send(result);
    } catch (err){
        console.log("Error, processSignup:", err);
        res.send(err);
    }
};

restaurantController.processLogin = async (req: AdminRequest, res:Response) => {
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

restaurantController.checkAuthSession = async (req: AdminRequest, res:Response) => {
    try {
            console.log("checkAuthSession");
            if(req.session?.member) res.send(`Hi, ${req.session.member.memberNick}`);
            else res.send(Message.NOT_AUTHENTICATED);
    } catch (err){
        console.log("Error, checkAuthSession:", err);
        res.send(err);
    }
};


export default restaurantController; 