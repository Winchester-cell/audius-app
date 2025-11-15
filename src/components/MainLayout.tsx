'use client'
import { FC, PropsWithChildren, useEffect, useState } from "react"
import SideBar from "./modules/SideBar/SideBar"
import { usePathname } from "next/navigation"
import Header from "./modules/Header/Header"
import { useTranslation } from "react-i18next"
import { useSideBarStore } from "@/stores/sideBarStore"
import { getViewPortWidth } from "@/utils/getViewPortW"
import SidebarOpen from "./modules/Controls/SideBarOpen"

const MainLayout: FC<PropsWithChildren> = ({ children }) => {

    const { isSideBarCollapse, setSideBarOpen } = useSideBarStore()
    const pathname = usePathname()
    const { i18n } = useTranslation()

    useEffect(() => {
        const vw = getViewPortWidth()
        vw < 1024 ? setSideBarOpen(false) : setSideBarOpen(true)
    }, [])

    let openClass = isSideBarCollapse ? 'w-full lg:w-[calc(100%-100px)] ms-auto' : 'w-full lg:w-[calc(100%-300px)] ms-auto'

    if (pathname === '/login') return <>{children}</>

    return (
        <div className={`${i18n.language === 'fa' ? 'rtl font-(--main-persian)' : 'font-(--main-font)'} w-full`}>
            <SideBar />
            <div className={`${openClass} transition-all duration-500`}>
                <div className="w-full flex items-center gap-3 p-5 overflow-hidden">
                    <SidebarOpen />
                    <Header />
                </div>
                {children}
            </div>
        </div>
    )
}

export default MainLayout