'use client'
import NavigateSection from "./NavigateSection"
import ProfileSection from "./ProfileSection"
import ControlSection from "./ControlSection";
import SidbarCollapse from "../Controls/SidebarCollapse";
import { useSideBarStore } from "@/stores/sideBarStore";
import SidebarClose from "../Controls/SideBarClose";
import { useTranslation } from "react-i18next";

const SideBar = () => {

    const { isSideBarCollapse, isSideBarOpen, setSideBarOpen } = useSideBarStore()
    const {i18n} = useTranslation()

    return (
        <>
            <div className={`fixed bg-(--main-bg) z-50 top-0 start-0 ${isSideBarCollapse ? 'w-[100px]' : 'w-[300px]'} ${isSideBarOpen ? '' : `${i18n.language === 'fa' ? 'translate-x-full' : '-translate-x-full' }`} h-dvh neu__norm transition-all duration-500`}>
                <div className={`flex flex-col gap-5 ${isSideBarCollapse ? 'py-5 px-2' : 'p-5'} h-full`}>
                    <div className={`flex gap-3 ${isSideBarCollapse ? 'justify-center' : 'justify-end'}`}>
                        <SidbarCollapse />
                        <SidebarClose />
                    </div>
                    <ProfileSection />
                    <NavigateSection />
                    <ControlSection />
                </div>
            </div>
            {/* mobile overlay */}
            {
                isSideBarOpen &&
                <div onClick={() => setSideBarOpen(false)} className="w-dvw h-dvh backdrop-blur-md fixed z-40 lg:hidden" />
            }
        </>
    )
}

export default SideBar