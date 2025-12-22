import { Track } from "@/types/tracks.type";
import { create } from "zustand";

interface AudioStore {
    streamUrl: string,
    isPlaying: boolean,
    track: Track | null,
    playerVisible: boolean,
    actions: {
        setStreamUrl: (value: string) => void
        setPlaying: (value: boolean) => void
        setTrack: (value: Track) => void,
        setPlayerVisible: (value: boolean) => void,
    }
}

const useAudioStore = create<AudioStore>((set) => ({
    streamUrl: '',
    isPlaying: false,
    track: null,
    playerVisible: false,
    actions: {
        setStreamUrl: (newUrl) => set(() => ({ streamUrl: newUrl })),
        setPlaying: (newValue) => set(() => ({ isPlaying: newValue })),
        setTrack: (newTrack) => set(() => ({ track: newTrack })),
        setPlayerVisible: (newValue) => set(() => ({ playerVisible: newValue }))
    },
}))

export const useStreamUrl = () => useAudioStore((state) => state.streamUrl)
export const useIsPlaying = () => useAudioStore((state) => state.isPlaying)
export const useTrack = () => useAudioStore((state) => state.track)
export const usePlayerVisible = () => useAudioStore((state) => state.playerVisible)
export const useAudioActions = () => useAudioStore((state) => state.actions)
