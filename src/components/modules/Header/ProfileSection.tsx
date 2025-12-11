import { useSession } from "next-auth/react"

const ProfileSection = () => {

    const { data, status } = useSession()

    if (status === 'unauthenticated') return null

    return (
        <div className="flex items-center gap-2 select-none">
            {
                status === 'authenticated' &&
                <div className="w-[38px] h-[38px] rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover" src={data.user?.image?.toString()} alt="" />
                </div>
            }
        </div>
    )
}

export default ProfileSection