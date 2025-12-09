import { useSideBarStore } from "@/stores/sideBarStore";
const ProfileSection = () => {

    const { isSideBarCollapse } = useSideBarStore()

    return (
        <div className={`rounded-3xl flex items-center ${isSideBarCollapse ? 'justify-center' : 'p-3 neu__inner'} gap-3`}>
            {
                isSideBarCollapse &&
                <div className="w-[47px] h-[47px] rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://ucarecdn.com/7f0cc399-b5f2-4d7d-8157-e3c75d125e79/-/preview/1000x1000/" alt="" />
                </div>
            }
            {
                !isSideBarCollapse &&
                <div className="flex items-center gap-2 select-none">
                    {/* <div className="neu__inner rounded-full p-2.5">
                        <FaUserAstronaut className="w-6 h-6" />
                    </div> */}
                    <div className="w-[47px] h-[47px] rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://ucarecdn.com/7f0cc399-b5f2-4d7d-8157-e3c75d125e79/-/preview/1000x1000/" alt="" />
                    </div>
                    <div className="font-semibold text-[16px] line-clamp-1">Reza</div>
                </div>
            }
        </div>
    )
}

export default ProfileSection