import express from "express"; 
import path from "path";
import router from "./router"; 
import routerAdmin from "./routerAdmin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";
import {T} from "./libs/types/common";
import cookieParser from "cookie-parser";

import session from "express-session"; 
import ConnectMongoDB from "connect-mongodb-session";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: "sessions", 
});
    
/* 1-ENTRANCE */ // app.ts -> idnex.ts -> server.ts
const app = express();

/* CORS */ // frontend (localhost:3000) and backend (localhost:3003) are different origins;
// credentials:"include" is used by the frontend, so the origin must be echoed back explicitly (can't use "*")
app.use(function(req, res, next) {
    const origin = req.headers.origin;
    if (origin) res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") return res.sendStatus(204);
    next();
});

app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("./uploads")); // when data comes with uploads send it to static folder
app.use(express.urlencoded({extended:true})); // rest api support ?
app.use(express.json());
app.use(cookieParser()); 
app.use(morgan(MORGAN_FORMAT));

/* 2-SESSIONS */ // 
app.use(
    session({
        secret:String(process.env.MONGO_URL), 
        cookie: {
            maxAge: 1000 * 60* 60 * 24 *7 // 1 week
        }, 
        store: store , 
        resave: true, // false -> 10:30 auth => 13:30 
        saveUninitialized: true, 
    })
); 

app.use(function(req, res, next) {
    const sessionInstance = req.session as T;
    res.locals.member = sessionInstance.member;
    next();
})


/* 3 -VIEWS */  // -> VIEWS builds html on BACKEND and send to Frontend | API -> FRONTEND builds html on FRONTEND and send to Browser
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', "ejs");

/* 4-ROUTERS */ // 
app.use("/admin", routerAdmin);  // -> BSSR 
app.use("/",router); // Middleware Design Pattern -> SPA 

export default app;  // module.exports

