'use client'
import ThemeToggle from "../Controls/ThemeToggle";
import { usePathname } from "next/navigation";
import { useSideBarStore } from "@/stores/sideBarStore";
import SettingsButton from "../Controls/SettingsButton";

const ControlSection = () => {

  const pathname = usePathname()
  const {isSideBarCollapse} = useSideBarStore()

  return (
    <div className={`${pathname === '/login' ? 'ltr' : '' } ${isSideBarCollapse ? 'flex-col py-3 gap-2' : 'flex-row p-5 gap-5'} neu__inner  rounded-3xl w-full flex items-center justify-center`}>
      <SettingsButton />
      <ThemeToggle />
    </div>
  )
}

export default ControlSection