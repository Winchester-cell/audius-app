'use client'
import { FC, PropsWithChildren } from "react"
import SideBar from "./modules/SideBar/SideBar"
import { usePathname } from "next/navigation"
import Header from "./modules/Header/Header"
import { useTranslation } from "react-i18next"
import { useSideBarStore } from "@/stores/sideBarStore"

const MainLayout: FC<PropsWithChildren> = ({ children }) => {

    const {isSideBarCollapse} = useSideBarStore()
    const openClass = isSideBarCollapse ? 'w-[calc(100%-100px)] ms-auto' : 'w-[calc(100%-300px)] ms-auto' 
    const pathname = usePathname()
    const { i18n } = useTranslation()

    if (pathname === '/login') return <>{children}</>

    return (
        <div className={`${i18n.language === 'fa' ? 'rtl font-(--main-persian)' : 'font-(--main-font)'}`}>
            <div className={`${openClass} transition-all duration-500 overflow-hidden`}>
                <Header />
                {children}
            </div>
        </div>
    )
}

export default MainLayout