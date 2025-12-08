import React, { FC, ReactNode, useRef } from "react"
import { IoChevronBack, IoChevronForward } from "react-icons/io5"
import SimpleBar from "simplebar-react"

interface SectionCardProps {
    sectionTitle: string,
    buttonTitle: string,
    icon?: React.ElementType,
    children?: ReactNode
}


const CardBox: FC<SectionCardProps> = ({ sectionTitle, buttonTitle, children, icon: Icon }) => {


    const scrollRef = useRef<HTMLDivElement>(null)

    const scrollBack = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 300
        }
    }
    const scrollForward = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 300
        }
    }

    return (
        <div className='select-none p-4 lg:p-5 neu__norm rounded-3xl overflow-hidden w-full'>
            <div className='flex items-center justify-between px-3 lg:px-5'>
                <h2 className='font font-semibold text-[14px] lg:text-xl flex gap-1 items-center'>
                    {Icon && <Icon className={`size-5 lg:size-8 mt-0.5`} />}
                    {sectionTitle}
                </h2>
                <span className='text-(--alt-text) neu__norm rounded-full py-3 px-5 text-[10px] lg:text-[14px]'>{buttonTitle}</span>
            </div>
            <div className="flex items-center lg:px-3 gap-3 lg:gap-5 w-full">
                {/* back button */}
                <button onClick={scrollBack} className="px-1 py-8 lg:py-10 rounded-lg neu__norm">
                    <IoChevronBack className="size-3 lg:size-5" />
                </button>
                {/* card container */}
                <div className='neu__inner mt-5 rounded-2xl px-5 py-3 w-full overflow-hidden'>
                    <SimpleBar scrollableNodeProps={{ ref: scrollRef, className: 'smoothScroll' }} style={{ width: '100%' }}>
                        <div className="flex py-2 px-2">
                            {children}
                        </div>
                    </SimpleBar>
                </div>
                {/* next button */}
                <button onClick={scrollForward} className="px-1 py-8 lg:py-10 rounded-lg  neu__norm">
                    <IoChevronForward className="size-3 lg:size-5" />
                </button>
            </div>
        </div >
    )
}

export default CardBox