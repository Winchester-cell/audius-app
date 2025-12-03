import { SingleItemType } from '@/contents/sidebarContent'
import { useSideBarStore } from '@/stores/sideBarStore'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

interface SidBarSingleItemProps extends SingleItemType {
    fontSize?: number
    iconW?: string
    iconH?: string
    isSubmenu?: boolean
}

const SideBarSingleItem: FC<SidBarSingleItemProps> = ({ isSubmenu, text, icon: Icon, href, fontSize, iconW = 'w-5', iconH = 'h-5' }) => {

    const pathname = usePathname()
    const { isSideBarCollapse } = useSideBarStore()

    return (
        <div>
            <Link style={{ fontSize: fontSize }} href={href} className={`${href === pathname ? `text-(--navbar-active-route) font-bold` : `font-semibold`} ${isSideBarCollapse ? 'p-2 justify-center' : 'py-2 ps-5'} grow flex items-center  gap-1 neu__norm rounded-full  transition-all duration-500 hover:scale-[1.03]  hover:bg-(--hover-color) hover:text-white ${isSubmenu ? 'border-s-[3px] border-(--hover-color)' : ''}`}>
                <Icon className={`${iconW} ${iconH}`} />
                {
                    !isSideBarCollapse &&
                    <span>{text}</span>
                }
            </Link>
        </div>
    )
}

export default SideBarSingleItem