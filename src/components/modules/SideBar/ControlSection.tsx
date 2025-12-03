'use client'
import ThemeToggle from "../Controls/ThemeToggle";
import { useSideBarStore } from "@/stores/sideBarStore";

const ControlSection = () => {

  const { isSideBarCollapse } = useSideBarStore()

  return (
    <div className={`${isSideBarCollapse ? 'flex-col py-3 gap-2' : 'flex-row p-5 gap-5'} neu__inner  rounded-3xl w-full flex items-center justify-center`}>
      <ThemeToggle />
    </div>
  )
}

export default ControlSection