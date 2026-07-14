import {addNewUserController,getAllUsersController,getUserByIdController,updateUserController,deleteUserController,searchByEmailController} from "./auth.controller.js"
import express from "express"
const userRouter = express.Router()
// http://localhost:4000/api/v1/user/add
userRouter.post("/add",addNewUserController)
// http://localhost:4000/api/v1/user/search?email=value
userRouter.get("/search",searchByEmailController)
// http://localhost:4000/api/v1/user/
userRouter.get("/",getAllUsersController)
// http://localhost:4000/api/v1/user/:id
userRouter.get("/:id",getUserByIdController)
// http://localhost:4000/api/v1/user/update/:id
userRouter.put("/update/:id",updateUserController)
// http://localhost:4000/api/v1/user/delete/:id
userRouter.delete("/delete/:id",deleteUserController)
export default userRouter;