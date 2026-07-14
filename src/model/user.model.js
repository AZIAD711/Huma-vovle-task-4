import { model, Model, Schema } from "mongoose";
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