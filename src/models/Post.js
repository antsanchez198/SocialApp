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
            type: [Number],
            default: [],
        },
    } 
)

module.exports = mongoose.models.Post || mongoose.model("Post", postSchema)