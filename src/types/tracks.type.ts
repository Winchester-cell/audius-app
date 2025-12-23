export interface Track {
    id: string | number;
    title: string;
    duration: number;
    genre: string;
    description: string;
    mood:string;
    artwork: {
        "150x150": string | null;
        "480x480": string | null;
        "1000x1000": string | null;
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