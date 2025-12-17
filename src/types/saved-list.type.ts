export interface SavedPlaylistPayload {
    playlistID: string | number,
    playlistName: string,
    image: string | null,
    creatorName: string,
}

export interface SavedTrackPayload {
    trackID: string | number,
    trackTitle: string,
    image: string | null,
    uploaderName: string,
}