import jwt from "jsonwebtoken"
import {UserRole} from "../enum/role.js"
import {TokenType} from "../enum/token-type.js"
// import dotenv, { config } from "dotenv"
// GENERATE TOKEN FUNCTION 
export const generateToken = ({
    payload,
    secretKey,
    options = {
        expiresIn: "1h",
        notBefore: "0",
        audience: "user",
        issuer: "Huma volvo task-4",
    },
}) => {
    return jwt.sign(payload, secretKey, options);
};
// VERFIY TOKEN FUNCTION 
export const verfiyToken = (token,sceretKey)=>{
return jwt.verify(token,sceretKey)
}
// DECODED TOKKEN FUNCTION 
export const decodedToken = (token)=>{
    return jwt.decode(token)
}
// LOGIN CREDENTIALS FUNCTION
export const loginCredentials = (role) => {
    switch (role) {
        case UserRole.USER:
            return {
                [TokenType.ACCESS]: process.env.USER_ACCESS_SECRET,
                [TokenType.REFRESH]: process.env.USER_REFRESH_SECRET,
            };

        case UserRole.ADMIN:
            return {
                [TokenType.ACCESS]: process.env.ADMIN_ACCESS_SECRET,
                [TokenType.REFRESH]: process.env.ADMIN_REFRESH_SECRET,
            };

        default:
            throw new Error("Invalid role");
    }
};