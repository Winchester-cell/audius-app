'use client'
import Link from 'next/link'
import React, { FC, ReactNode } from 'react'
import SimpleBar from 'simplebar-react'

interface SavedBoxProps {
    sectionTitle: string,
    buttonTitle: string,
    allHref?: string,
    icon?: React.ElementType,
    children?: ReactNode
}

const SavedBox: FC<SavedBoxProps> = ({ sectionTitle, buttonTitle, icon: Icon, allHref, children }) => {
    return (
        <div className='select-none px-1 py-3 lg:p-5 neu__norm rounded-3xl overflow-hidden w-full'>
            <div className='flex items-center justify-between px-3 lg:px-5'>
                <h2 className='font font-semibold text-[14px] lg:text-xl flex gap-1 items-center'>
                    {Icon && <Icon className={`size-5 lg:size-8 mt-0.5`} />}
                    {sectionTitle}
                </h2>
                <Link href={allHref ? allHref : '#'} className='text-(--alt-text) neu__norm rounded-full py-2 lg:py-3 px-5 lg:px-7 text-[10px] lg:text-[12px]'>{buttonTitle}</Link>
            </div>
            <div className="flex items-center lg:px-3 gap-1 lg:gap-3 w-full">
                {/* card container */}
                <div className='neu__inner mt-5 rounded-2xl p-1 lg:px-5 lg:py-3 w-full overflow-hidden'>
                    <SimpleBar style={{ height: '100%' }}>
                        <div className="flex flex-col py-2 px-2 gap-5">
                            {children}
                        </div>
                    </SimpleBar>
                </div>
            </div>
        </div >
    )
}

export default SavedBox