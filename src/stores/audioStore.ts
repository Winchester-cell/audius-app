import { Track } from "@/types/tracks.type";
import { create } from "zustand";

interface AudioStore {
    streamUrl: string,
    setStreamUrl: (value: string) => void
    isPlaying: boolean,
    setPlaying: (value: boolean) => void
    track: Track | null,
    setTrack: (value: Track) => void
}

export const useAudioStore = create<AudioStore>((set) => ({
    streamUrl: '',
    setStreamUrl: (newUrl) => set(() => ({ streamUrl: newUrl })),
    isPlaying: false,
    setPlaying: (newValue) => set(() => ({ isPlaying: newValue })),
    track: null,
    setTrack: (newTrack) => set(() => ({ track: newTrack }))
}))