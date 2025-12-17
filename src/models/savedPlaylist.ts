import mongoose, { Schema } from "mongoose";

const playListSchema = new Schema({
    userID: {
        type: String,
        required: true
    },
    playlistID: {
        type: String,
        required: true
    },
    playlistName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    creatorName: {
        type: String,
        required: true
    },
})


export const savedPlaylistsModel = mongoose.models.SavedPlaylists || mongoose.model('SavedPlaylists', playListSchema)

