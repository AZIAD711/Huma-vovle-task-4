import UserModel from "../../model/user.model.js"
// ADD NEW USER 
export const addNewUserService = async (data)=>{
    return await UserModel.create(data)
}
// GET ALL USER
export const getAllUsersService = async ()=>{
    return await UserModel.find()
}
// GET USER BY ID
export const getUserByIdService =  (userId)=>{
    return  UserModel.findOne({
        _id : userId
    })
}
// UPDATE USER DATA 
export const updateUserService = async (userId, data) => {
    const existUser = await UserModel.findById(userId);

    if (!existUser) {
        throw new Error("USER NOT FOUND !");
    }

    return await UserModel.findByIdAndUpdate(
        userId,
        {
            name: data.name,
            email: data.email,
            password: data.password,
        },
        {
            new: true,
        }
    );
};
// DELETE USER DATA 
export const deleteUserService =  async(userId)=>{
    return  await UserModel.findByIdAndDelete({
        _id : userId
    })
}
// SERACH USER BY EMAIL 
export const searchByEmailService = (email) => {
    return UserModel.findOne({
        email: email,
    });
};