import jwt from "jsonwebtoken";
import { loginCredentials,decodedToken,verfiyToken } from "../token/token.js";
import { TokenType } from "../enum/token-type.js";
import {authorizedResponse,badRequestResponse} from "../response/error.js"

export const authentication = (tokenType = TokenType.ACCESS) => {
    return (request, response, next) => {
        try {
            const authorization = request.headers.authorization;

            if (!authorization) {
                return badRequestResponse({
                    response:response,
                    message:"Token is wrong !"
                })
            }

            const token = authorization.split(" ")[1];

            if (!token) {
                return badRequestResponse({
                    response:response,
                    message: "Invalid Authorization Header"
                })
            }
            const decoded = decodedToken(token);

            if (!decoded?.role) {
               return badRequestResponse({
                    response:response,
                    message:"Token is wrong !"
                })
            }
            const secrets = loginCredentials(decoded.role);
            const verified = verfiyToken(
                token,
                secrets[tokenType]
            );

            request.user = verified;

            next();
        } catch (error) {
            return response.status(401).json({
                message: error.message,
            });
        }
    };
};