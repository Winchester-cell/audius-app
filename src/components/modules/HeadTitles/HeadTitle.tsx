'use client'
import { FC, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

interface HeadTitleProps {
    title: string,
    description: string,
    children?: ReactNode
}

const HeadTitle: FC<HeadTitleProps> = ({ title, description, children }) => {

    const { t } = useTranslation()

    return (
        <div className='w-full py-4 px-7 neu__norm rounded-3xl flex justify-between items-center'>
            <div>
                <h2 className='font-bold lg:text-lg'>{t(title)}</h2>
                <p className='lg:text-[14px] text-(--alt-text) font-semibold'>{t(description)}</p>
            </div>
            {children}
        </div>
    )
}

export default HeadTitle