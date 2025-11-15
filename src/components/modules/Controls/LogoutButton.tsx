'use client'

import { usePathname } from "next/navigation"
import { BiLogOutCircle } from "react-icons/bi"

const LogoutButton = () => {

    const pathname = usePathname()

    return (
        <>
            {
                pathname !== '/login' &&
                <div className="neu__norm p-3 rounded-full transition-all duration-500 hover:bg-(--hover-color) hover:scale-[1.2] hover:text-white cursor-pointer">
                    <BiLogOutCircle className="w-5 h-5" />
                </div>
            }
        </>
    )
}

export default LogoutButton