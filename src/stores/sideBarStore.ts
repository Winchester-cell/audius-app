import { getViewPortWidth } from '@/utils/ui/getViewPortW'
import { create } from 'zustand'

interface SideBarStore {
    isSideBarCollapse: boolean,
    isSideBarOpen: boolean,
    isMobile: boolean,
    setSideBarOpen: (value: boolean) => void,
    toggleCollapse: () => void,
}

export const useSideBarStore = create<SideBarStore>((set) => ({
    isSideBarCollapse: false,
    toggleCollapse: () => set((state) => ({ isSideBarCollapse: !state.isSideBarCollapse })),
    isMobile: getViewPortWidth() < 1024 ? true : false,
    isSideBarOpen: false,
    setSideBarOpen: (newValue) => set(() => ({ isSideBarOpen: newValue }))
}))