'use client'
import { FC, PropsWithChildren, useEffect, useRef } from "react"
import SideBar from "./modules/SideBar/SideBar"
import { usePathname } from "next/navigation"
import Header from "./modules/Header/Header"
import { useSideBarStore } from "@/stores/sideBarStore"
import { getViewPortWidth } from "@/utils/getViewPortW"
import AudioPlayer from "./modules/Player/AudioPlayer"
import { useScrollStore } from "@/stores/scrollStore"

const MainLayout: FC<PropsWithChildren> = ({ children }) => {

    const { setIsBottom} = useScrollStore()
    const { isSideBarCollapse, setSideBarOpen, isMobile } = useSideBarStore()
    const pathname = usePathname()
    const scrollableElemRef = useRef<HTMLDivElement>(null)

    const scrollHandler = () => {
        if(scrollableElemRef.current){
            const isAtBottom = scrollableElemRef.current.scrollTop + scrollableElemRef.current.clientHeight >= scrollableElemRef.current.scrollHeight - 1;
            if (isAtBottom) {
                setIsBottom(true)
            }
        }
    }

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
            <div onScroll={scrollHandler} ref={scrollableElemRef} className={`${openClass} transition-[width] duration-500 flex flex-col h-full overflow-y-auto`}>
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