import dotenv from 'dotenv'; 
dotenv .config();

// console.log("PORT:", process.env.PORT);

// console.log("MONGO_URL:", process.env.MONGO_URL);

// CLUSTER => DATABASE => COLLECTION => DOCUMENT

import mongoose from 'mongoose'

mongoose.connect(process.env.MONGO_URL as string, {})
.then((data) => {
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3003;
}) 
.catch(err => console.log("ERROR on MongoDB", err));