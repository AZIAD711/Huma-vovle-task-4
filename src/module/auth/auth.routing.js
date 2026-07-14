import { addNewUserController, getAllUsersController, getUserByIdController, updateUserController, deleteUserController, searchByEmailController,loginController } from "./auth.controller.js"
import { authentication } from "../../common/middleware/authentication.middleware.js"
import { authorization } from "../../common/middleware/authorization.middleware.js"
import { UserRole } from "../../common/enum/role.js"
import express from "express"
const userRouter = express.Router()
// http://localhost:4000/api/v1/user/add
userRouter.post("/add",addNewUserController)
// http://localhost:4000/api/v1/user/login
userRouter.post("/login",loginController)
// http://localhost:4000/api/v1/user/search?email=value
userRouter.get("/search", authentication(), authorization(UserRole.USER, UserRole.ADMIN),searchByEmailController)
// http://localhost:4000/api/v1/user/
userRouter.get("/", authentication(), authorization(UserRole.ADMIN), getAllUsersController)
// http://localhost:4000/api/v1/user/:id
userRouter.get("/:id", authentication(), authorization(UserRole.USER, UserRole.ADMIN), getUserByIdController)
// http://localhost:4000/api/v1/user/update/:id
userRouter.put("/update/:id", authentication(), authorization(UserRole.USER, UserRole.ADMIN),updateUserController)
// http://localhost:4000/api/v1/user/delete/:id
userRouter.delete("/delete/:id", authentication(), authorization( UserRole.ADMIN),deleteUserController)
export default userRouter;