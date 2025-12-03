import { FC, ReactNode } from "react"
import SimpleBar from "simplebar-react"

interface SectionCardProps {
    sectionTitle: string,
    buttonTitle: string,
    children?: ReactNode
}


const SectionCard: FC<SectionCardProps> = ({ sectionTitle, buttonTitle, children }) => {
    return (
        <div className='select-none p-5 neu__norm rounded-3xl overflow-hidden'>
            <div className='flex items-center justify-between px-5'>
                <h2 className='font font-semibold text-xl'>{sectionTitle}</h2>
                <span className='text-(--alt-text) neu__norm rounded-full py-3 px-5'>{buttonTitle}</span>
            </div>
            <div className='neu__inner mt-5 rounded-2xl px-5 py-3'>
                <SimpleBar>
                    <div className="flex py-2 px-2">
                        {children}
                    </div>
                </SimpleBar>
            </div>
        </div>
    )
}

export default SectionCard