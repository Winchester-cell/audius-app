'useClient'
import { useSideBarStore } from "@/stores/sideBarStore";
import { useTranslation } from "react-i18next";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SidbarCollapse = () => {

    const { isSideBarCollapse, toggleCollapse } = useSideBarStore()
    const { i18n } = useTranslation()

    return (
        <button onClick={toggleCollapse} className="neu__norm p-2 rounded-full transition-all duration-500 hover:bg-(--hover-color) hover:scale-[1.2] hover:text-white cursor-pointer">
            {
                i18n.language === 'fa' ? (
                    <IoIosArrowForward className={`transition-all duration-500 w-4 h-4 ${isSideBarCollapse ? '-rotate-180' : ''}`} />
                ) : (
                    <IoIosArrowBack className={`transition-all duration-500 w-4 h-4 ${isSideBarCollapse ? '-rotate-180' : ''}`} />
                )
            }
        </button>
    )
}

export default SidbarCollapse