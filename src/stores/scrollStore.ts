import { create } from "zustand";

interface scrollStore {
    isBottom: boolean,
    setIsBottom: (value: boolean) => void,
}

export const useScrollStore = create<scrollStore>((set) => ({
    isBottom: false,
    setIsBottom: (newValue) => set({ isBottom: newValue })
}))