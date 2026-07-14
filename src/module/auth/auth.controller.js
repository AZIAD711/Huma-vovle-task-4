import { addNewUserService ,getAllUsersService,getUserByIdService,updateUserService,deleteUserService,searchByEmailService} from "./auth.service.js";
import { createdDataResponse,dataFoundResponse,dataUpdatedResponse,dataDeletedResponse } from "../../common/response/sccuess.js";
import { internalServerResponse } from "../../common/response/error.js";

// ADD NEW USER
export const addNewUserController = async (request, response) => {
    try {
        const userData = request.body;

        const user = await addNewUserService(userData);

        return createdDataResponse({
            response,
            message: "User",
            data: user,
        });
    } catch (error) {
        console.log("❌ ERROR IN USER CONTROLLER:", error);
        return internalServerResponse({
            response,
            message:error.message
        });
    }
};
// GET ALL USERS
export const getAllUsersController = async (request, response) => {
    try {
        const user = await getAllUsersService();

        return dataFoundResponse({
            response,
            message: "USERS",
            data: user,
        });
    } catch (error) {
        console.log("❌ ERROR IN USER CONTROLLER:", error);
        return internalServerResponse({
            response,
            message:error.message
        });
    }
};
// GET USER BY ID
export const getUserByIdController = async (request, response) => {
    try {
        const { id } = request.params;

        const user = await getUserByIdService(id);

        return dataFoundResponse({
            response,
            message: "User",
            data: user,
        });
    } catch (error) {
        console.log("❌ ERROR IN USER CONTROLLER:", error);

        return internalServerResponse({
            response,
            message: error.message,
        });
    }
};
// UPDATE USER DATA
export const updateUserController = async (request, response) => {
    try {
        const { id } = request.params;
        const userData = request.body
        const user = await updateUserService(id,userData);

        return dataUpdatedResponse({
            response,
            message: "User",
            data: user,
        });
    } catch (error) {
        console.log("❌ ERROR IN USER CONTROLLER:", error);

        return internalServerResponse({
            response,
            message: error.message,
        });
    }
};
// DELETE USER DATA
export const deleteUserController = async (request, response) => {
    try {
        const { id } = request.params;

        const user = await deleteUserService(id);

        return dataDeletedResponse({
            response,
            message: "User",
            data: user,
        });
    } catch (error) {
        console.log("❌ ERROR IN USER CONTROLLER:", error);

        return internalServerResponse({
            response,
            message: error.message,
        });
    }
};
// SERACH ABOUT USER BY EMAIL 
export const searchByEmailController = async (request, response) => {
    try {
        const { email } = request.query;

        const user = await searchByEmailService(email);

        return dataFoundResponse({
            response,
            message: "Email",
            data: user,
        });
    } catch (error) {
        console.log("❌ ERROR IN USER CONTROLLER:", error);

        return internalServerResponse({
            response,
            message: error.message,
        });
    }
};