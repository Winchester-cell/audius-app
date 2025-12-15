import { FC, ReactElement, ReactNode } from "react"

interface PageTitleSectionProps {
    icon?: React.ElementType
    title: string
    description: string
    children?: ReactNode
}

const PageTitleSection: FC<PageTitleSectionProps> = ({ icon: Icon, title, description, children }) => {
    return (
        <div className="w-full flex items-center gap-5 justify-between neu__norm px-10 py-5 rounded-3xl select-none">
            <div className="flex items-center gap-1">
                {Icon && <Icon className="size-11" />}
                <div>
                    <h2 className="font-bold text-[12px] lg:text-[16px] flex items-center gap-1">
                        {title}
                    </h2>
                    <div className="text-[8px] lg:text-[10px] text-(--alt-text)">{description}</div>
                </div>
            </div>
            {children}
        </div>
    )
}

export default PageTitleSection