import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        username :{
            type: String,
            require: true,
            min: 3,
            max: 20,
            unique: true
        },
        email: {
            type: String,
            require: true,
            max: 50,
            unique: true
        },
        password: {
            type: String,
            require: true,
            min: 6,
        },
        profilePicture: {
            type: String,
            default: "",
        },
        coverPicture: {
            type: String,
            default: "",
        }
        ,
        coverPicture: {
            type: String,
            default: "",
        },
        followers: {
            type: Array,
            default: []
        },
        following: {
            type: Array,
            default: []
        },
    },
    {timestamps: true}
)

module.exports = mongoose.models.User || mongoose.model("User", userSchema);