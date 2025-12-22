'use client'
import PaginationControls from '@/components/modules/Controls/PaginationControls'
import { PaginationProps } from '@/types/pagination-prop.type'
import React, { FC, ReactNode } from 'react'
import SimpleBar from 'simplebar-react'

interface SavedBoxProps {
    sectionTitle: string,
    icon?: React.ElementType,
    children?: ReactNode
    paginationProps:PaginationProps
}

const SavedBox: FC<SavedBoxProps> = ({ sectionTitle, icon: Icon, children , paginationProps }) => {
    return (
        <div className='select-none px-1 py-3 lg:p-5 neu__norm rounded-3xl overflow-hidden w-full'>
            <div className='flex items-center justify-between px-3 lg:px-5'>
                <h2 className='font font-semibold text-[14px] lg:text-xl flex gap-1 items-center'>
                    {Icon && <Icon className={`size-5 lg:size-8 mt-0.5`} />}
                    {sectionTitle}
                </h2>
                <PaginationControls {...paginationProps} />
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