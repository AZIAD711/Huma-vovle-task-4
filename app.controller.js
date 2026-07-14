import userRouting from "./src/module/auth/auth.routing.js"
import express from "express"
import dotenv, { config } from "dotenv"
import {databaseConnection} from "./src/database/database-connection.js"
export const app =()=>{
    dotenv.config();
    databaseConnection()
    const router = express()
    router.use(express.json())
    // STUDENT ROUTING 
    router.use("/api/v1/user", userRouting)
    return router
}
export default app