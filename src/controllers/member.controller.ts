import {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models//Member.service";
import { LoginInput , Member , MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Error";
import AuthService from "../models/Auth.service";
import { AUTH_TIMER } from "../libs/config";

const memberService = new MemberService();
const memberController: T = {}; 

const authService = new AuthService(); 

 /*
 memberController.goHome = (req: Request, res:Response) => {
    try {
          res.send("Home Page");
    } catch (err){
        console.log("Error, goHome:", err);
    }
};

memberController.goLogin = (req: Request, res:Response) => {
    try {
          res.send("Login Page");
    } catch (err){
        console.log("Error, goLogin:", err);
    }
};

memberController.getSignup = (req: Request, res:Response) => {
    try {
          res.send("Signup Page");
    } catch (err){
        console.log("Error, getSignup:", err);
    }
};

*/


memberController.signup = async (req: Request, res:Response) => {
    try {
            console.log("signup");
            const input: MemberInput = req.body, 
            result: Member = await memberService.signup(input);
            // TO DO: TOKENS AUTHENTICATION 

            const token = await authService.createToken(result);
          
            res.status(HttpCode.CREATED).json({member: result, accessToken: token});
    } catch (err){
        console.log("Error in signup:", err);
        if (err instanceof Errors) res.status(err.code).json(err); 
        else res.status(Errors.standard.code).json(Errors.standard);
        // res.json({member: result});
    }
};

memberController.login = async (req: Request, res:Response) => {
    try {
            console.log("login");
            const input: LoginInput = req.body, 
            result = await memberService.login(input),  // why underlying it red ? Login was already imported
            token = await authService.createToken(result); 
            // TO DO: TOKENS AUTHENTICATION 
            
            res.cookie("accessToken", token, {
                maxAge: AUTH_TIMER * 3600 * 1000,
                httpOnly: false,
            }); 

          res.status(HttpCode.OK).json({member: result, accessToken: token});
    } catch (err){
        console.log("Erro during Login:", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
        
    }
};

memberController.verifyAuth = async (req: Request, res: Response) => {
    try {
        let member = null; 
        const token = req.cookies["accessToken"]; 
        if(token) member = await authService.checkAuth(token);

        if(!member) 
            throw new Errors(HttpCode.UNAUTHORIZED, Message.NOT_AUTHENTICATED); 

        console.log("member", member); 
        res.status(HttpCode.OK).json({member: member});
    } catch (err) {
        console.log("Error, failed in varification(verifyAuth", err); 
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
        
    }
}



export default memberController; 