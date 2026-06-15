import {NextFunction, Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, AdminRequest, MemberInput} from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import {Message} from "../libs/Error";
import Errors from "../libs/Error";


const memberService = new MemberService();

const restaurantController: T = {}; 
restaurantController.goHome = (req: AdminRequest, res:Response) => {
    try {
          console.log("goHome"); // send | json | redirect | render 
          // LOGIC 
          // Service Model
          // ... 
          res.render("home"); // send | render | 
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
            newMember.memberType = MemberType.RESTAURANT;
            const result = await memberService.processSignup(newMember);

            req.session.member = result;
            req.session.save(function(){
                res.send(result);
            });
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

            req.session.member = result;
            req.session.save(function(){
                res.send(result);
            });
    } catch (err){
        console.log("Error, processLogin:", err);
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG
        res.send(err);
    }
};

restaurantController.logout = async (req: AdminRequest, res:Response) => {
    try {
            console.log("logout");
            req.session.destroy(function(){
                res.redirect("/admin");
            })
    } catch (err){
        console.log("Error, logout", err);
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

restaurantController.verifyRestaurant = (
    req: AdminRequest, 
    res:Response, 
    next: NextFunction
) => {

        if(req.session?.member?.memberType === MemberType.RESTAURANT) {
        req.member = req.session.member;
            next();
        } else {
            const message  = Message.NOT_AUTHENTICATED; 
        res.send(
            `<script> alert("${message}"); window.location.replace('/admin/login');</script>`
        );

        }

};


export default restaurantController; 