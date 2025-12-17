import mongoose, { Schema } from "mongoose";

const trackSchema = new Schema({
    userID: {
        type: String,
        required: true
    },
    trackID: {
        type: String,
        required: true
    },
    trackTitle: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    uploaderName: {
        type: String,
        required: true
    },
})


export const savedTracksModel = mongoose.models.SavedTracks || mongoose.model('SavedTracks', trackSchema)

