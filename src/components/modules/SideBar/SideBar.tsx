'use client'
import NavigateSection from "./NavigateSection"
import ProfileSection from "./ProfileSection"
import ControlSection from "./ControlSection";
import SidbarCollapse from "../Controls/SidbarCollapse";
import { useSideBarStore } from "@/stores/sideBarStore";

const SideBar = () => {

    const {isSideBarCollapse} = useSideBarStore()

    return (
        <div className={`fixed z-50 top-0 start-0 ${isSideBarCollapse ? 'w-[100px]' : 'w-[300px]'} h-dvh neu__norm transition-all duration-500`}>
            <div className={`flex flex-col gap-5 ${isSideBarCollapse ? 'py-5 px-2' : 'p-5'} h-full`}>
                <SidbarCollapse />
                <ProfileSection />
                <NavigateSection />
                <ControlSection />
            </div>
        </div>
    )
}

export default SideBar