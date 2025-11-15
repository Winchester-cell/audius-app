import { create } from 'zustand'

interface SideBarStore {
    isSideBarCollapse: boolean,
    toggleCollapse: () => void
}

export const useSideBarStore = create<SideBarStore>((set) => ({
    isSideBarCollapse: false,
    toggleCollapse: () => set((state) => ({ isSideBarCollapse: !state.isSideBarCollapse }))
}))