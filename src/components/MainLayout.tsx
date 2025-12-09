'use client'
import { FC, PropsWithChildren, useEffect } from "react"
import SideBar from "./modules/SideBar/SideBar"
import { usePathname } from "next/navigation"
import Header from "./modules/Header/Header"
import { useSideBarStore } from "@/stores/sideBarStore"
import { getViewPortWidth } from "@/utils/getViewPortW"
import AudioPlayer from "./modules/Player/AudioPlayer"

const MainLayout: FC<PropsWithChildren> = ({ children }) => {

    const { isSideBarCollapse, setSideBarOpen, isMobile } = useSideBarStore()
    const pathname = usePathname()

    useEffect(() => {
        const vw = getViewPortWidth()
        vw < 1024 ? setSideBarOpen(false) : setSideBarOpen(true)
    }, [])

    useEffect(() => {
        if (isMobile) {
            setSideBarOpen(false)
        }
    }, [isMobile, pathname])

    let openClass = isSideBarCollapse ? 'w-full lg:w-[calc(100%-100px)] ms-auto' : 'w-full lg:w-[calc(100%-250px)] ms-auto'

    if (pathname === '/login') return <>{children}</>

    return (
        <div className={`w-full container-c mx-auto relative neu__norm h-dvh overflow-hidden`}>
            <SideBar />
            <AudioPlayer openClass={openClass} />
            <div className={`${openClass} transition-all duration-500 flex flex-col h-full overflow-y-auto`}>
                <div className="p-5">
                    <Header />
                </div>
                <div className="grow px-5 pb-5 w-full">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MainLayout