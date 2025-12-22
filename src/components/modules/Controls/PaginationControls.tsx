import { PaginationProps } from "@/types/pagination-prop.type"
import { FC } from "react"
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5"

const PaginationControls: FC<PaginationProps> = ({ currentPage, totalPage, setCurrentPage }) => {

    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const nextPage = () => {
        if (currentPage !== totalPage) {
            setCurrentPage(currentPage + 1)
        }
    }

    if (totalPage === 1 || !totalPage) return null

    return (
        <div className="neu__norm px-5 py-3 rounded-full flex items-center justify-center gap-5">
            <IoChevronBackOutline onClick={prevPage} className={`size-4 cursor-pointer ${currentPage === 1 && 'opacity-40'}`} />
            <div>
                {currentPage} / {totalPage}
            </div>
            <IoChevronForward onClick={nextPage} className={`size-4 cursor-pointer ${currentPage === totalPage && 'opacity-40'}`} />
        </div>
    )
}

export default PaginationControls