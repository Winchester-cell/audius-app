import { useSideBarStore } from "@/stores/sideBarStore";
import { FaUserMd } from "react-icons/fa";
const ProfileSection = () => {

    const { isSideBarCollapse } = useSideBarStore()

    return (
        <div className={`rounded-3xl flex items-center ${isSideBarCollapse ? 'justify-center' : 'p-5 neu__inner ' } gap-3`}>
            {
                isSideBarCollapse &&
                <div className="p-4 neu__norm w-fit rounded-full">
                    <FaUserMd className="w-5 h-5"/>
                </div>
            }
            {
                !isSideBarCollapse &&
                <>
                    {/* Avatar */}
                    <div className="p-4 neu__norm w-fit rounded-full">
                        <FaUserMd className="w-5 h-5" />
                    </div>
                    {/* Info */}
                    <div className="grow">
                        <h2 className="text-[14px] font-semibold">Sara Ahmadi</h2>
                        <span className="text-[12px] text-(--alt-text)">Doctor</span>
                    </div>
                </>
            }
        </div>
    )
}

export default ProfileSection