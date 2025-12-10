'use client'
import { MdOutlineLogout } from "react-icons/md"

const LoginLogoutArea = () => {
    return (
        <>

            <div className="transition-[scale,color] duration-500 hover:text-(--hover-color) cursor-pointer hover:scale-[1.2]">
                <MdOutlineLogout className="size-4" />
            </div>

        </>
    )
}

export default LoginLogoutArea