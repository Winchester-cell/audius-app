'use client'
import { useSideBarStore } from '@/stores/sideBarStore'
import { IoIosArrowBack } from 'react-icons/io'

const SidebarOpen = () => {

    const { isSideBarOpen, setSideBarOpen } = useSideBarStore()

    return (
        <button onClick={() => setSideBarOpen(true)} className="lg:hidden neu__norm p-2 rounded-full transition-all duration-500 hover:bg-(--hover-color) hover:scale-[1.2] hover:text-white cursor-pointer">
            <IoIosArrowBack className={`transition-all duration-500 w-4 h-4 ${isSideBarOpen ? '' : '-rotate-180'}`} />
        </button>
    )
}

export default SidebarOpen