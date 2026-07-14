import { model, Model, Schema } from "mongoose";
import {UserRole} from "../common/enum/role.js"
import {StatusAccount} from "../common/enum/status-account.js"
import { type } from "node:os";
// USER SHCHEMA 
const userSchema = new Schema({
    // NAME 
    name: {
        type: String,
        minlength: 3,
        require: true,
        trim: true
    },
    // EMAIL 
    email: {
        type: String,
        require: true,
        unique: [true,"EMAIL ALREADY EXIST !"],
        trim: true,
        lowercase: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "ENTER VALID EMAIL ADDRESS !",
        ],
    },
    // PASSWORD 
    password: {
        type: String,
        minlength: 8,
        require: true,
        trim: true,
        match: [
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>_\-+=/\\[\];'`~])[^\s]{8,}$/,
            "ENTER VALID PASSWORD FORMATE !"
        ],
        get(){
            return "********"
        }
    },
    // ROLE 
    role : {
        type:String,
        enum : Object.values(UserRole),
        default:UserRole.USER
    },
    // STATUS ACCOUNT 
    statusAccount : {
        type:String,
        enum : Object.values(StatusAccount),
        default:StatusAccount.ACTIVE,
    }

},
{
    timestamps:true,
    strict:true,
    strictQuery:true,
    collection:"user_data",
    toJSON:{getters:true},
    toObject:{getters:true}
}
)
// USER MODEL 
const userModel =  model("User",userSchema)
export default userModel