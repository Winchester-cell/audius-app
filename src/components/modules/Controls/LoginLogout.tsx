'use client'
import { MdOutlineLogout } from "react-icons/md"

const LoginLogoutArea = () => {
    return (
        <>

            <div className="transition-all duration-500 hover:text-(--hover-color) cursor-pointer hover:scale-[1.2]">
                <MdOutlineLogout className="w-5 h-5" />
            </div>

        </>
    )
}

export default LoginLogoutArea