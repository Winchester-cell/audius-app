import { useSideBarStore } from "@/stores/sideBarStore";
import { useSession } from "next-auth/react";
const ProfileSection = () => {

    const { isSideBarCollapse } = useSideBarStore()
    const { data, status } = useSession()

    return (
        <div className={`rounded-3xl w-full flex ${isSideBarCollapse ? 'justify-center' : 'p-3 neu__inner'}`}>
            {
                isSideBarCollapse &&
                <div className="w-[47px] h-[47px] rounded-full overflow-hidden">
                    {data && <img className="w-full h-full object-cover" src={data.user?.image?.toString()} alt="" />}
                </div>
            }
            {
                !isSideBarCollapse &&
                <div className="w-full flex justify-start items-center gap-2 select-none">
                    {data && <img className="size-[47px] rounded-full" src={data.user?.image?.toString()} alt="" />}
                    <div className="w-full me-3">
                        <div className="font-semibold text-[12px] line-clamp-1 w-full">{data?.user?.name}</div>
                        <div className="text-[10px] line-clamp-1 text-(--alt-text) w-full">{data?.user?.email}</div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ProfileSection