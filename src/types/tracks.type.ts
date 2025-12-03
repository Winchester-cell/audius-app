export interface Track {
    id: string;
    title: string;
    duration: number;
    genre: string;
    artwork: {
        "150x150": string;
        "480x480": string;
        "1000x1000": string;
    }
    user: {
        id: string;
        handle: string;
        name: string;
        profile_picture: {
            "150x150": string;
            "480x480": string;
            "1000x1000": string;
        }
    }
}

export interface TrackResponse {
    data: Track[]
}