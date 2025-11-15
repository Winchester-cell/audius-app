import { create } from 'zustand'

interface SideBarStore {
    isSideBarCollapse: boolean,
    isSideBarOpen: boolean,
    setSideBarOpen: (value: boolean) => void,
    toggleCollapse: () => void,
}

export const useSideBarStore = create<SideBarStore>((set) => ({
    isSideBarCollapse: false,
    toggleCollapse: () => set((state) => ({ isSideBarCollapse: !state.isSideBarCollapse })),
    isSideBarOpen: false,
    setSideBarOpen: (newValue) => set(() => ({ isSideBarOpen: newValue }))
}))