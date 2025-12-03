import { FaUserAstronaut } from "react-icons/fa"

const ProfileSection = () => {
    return (
        <div className="flex items-center gap-2 select-none">
            {/* <div className="neu__inner rounded-full p-2.5">
                <FaUserAstronaut className="w-6 h-6" />
            </div> */}
            <div className="w-[38px] h-[38px] rounded-full overflow-hidden">
                <img className="w-full h-full object-cover" src="https://ucarecdn.com/7f0cc399-b5f2-4d7d-8157-e3c75d125e79/-/preview/1000x1000/" alt="" />
            </div>
            <div className="font-semibold">Reza</div>
        </div>
    )
}

export default ProfileSection