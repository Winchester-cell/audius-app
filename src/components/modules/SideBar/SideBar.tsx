'use client'
import NavigateSection from "./NavigateSection"
import SidbarCollapse from "../Controls/SidebarCollapse";
import { useSideBarStore } from "@/stores/sideBarStore";
import SidebarClose from "../Controls/SideBarClose";
import ControlSection from "./ControlSection";
import Clock from "../Clock/Clock";

const SideBar = () => {

    const { isSideBarCollapse, isSideBarOpen, setSideBarOpen } = useSideBarStore()

    return (
        <>
            <div className={`absolute bg-(--main-bg) z-50 top-0 start-0 ${isSideBarCollapse ? 'w-[100px]' : 'w-[250px]'} ${isSideBarOpen ? '' : '-translate-x-full'} h-dvh neu__norm transition-all duration-500`}>
                <div className={`flex flex-col gap-5 ${isSideBarCollapse ? 'py-5 px-2 h-full' : 'p-5'}`}>
                    <div className={`flex gap-3 ${isSideBarCollapse ? 'justify-center' : 'justify-end'}`}>
                        <SidbarCollapse />
                        <SidebarClose />
                    </div>
                    <NavigateSection />
                    <Clock />
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