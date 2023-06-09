import { Int32 } from "mongodb";
import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
    {
        caption :{
            type: String,
            require: true,
        },
        image: {
            type: [String],
            default: []
        },
        likes: {
            type: [Int32],
            default: [],
        },
    } 
)

module.exports = mongoose.models.Post || mongoose.model("Post", postSchema)