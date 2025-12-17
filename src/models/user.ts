import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        accountType: {
            type: String,
            enum: ['google', 'facebook', 'credentials'],
            required: true
        },
        userID: {
            type: String,
            required: true,
            unique: true,
            index: true
        }
    },
    { timestamps: true }
)

export const userModel = mongoose.models.User || mongoose.model('User', userSchema)
