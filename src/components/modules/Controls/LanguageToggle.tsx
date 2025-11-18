'use client'
import { useTranslation } from "react-i18next"
import { IoLanguage } from "react-icons/io5"

const LanguageToggle = () => {

    const { i18n } = useTranslation()

    const languageToggleHanlder = () => {
        i18n.changeLanguage(i18n.language === 'fa' ? 'en' : 'fa')
    }

    return (
        <button onClick={languageToggleHanlder} className="neu__norm p-3 rounded-full transition-all duration-500 hover:bg-(--hover-color) hover:scale-[1.2] hover:text-white cursor-pointer">
            <IoLanguage className="w-4 h-4" />
        </button>
    )
}

export default LanguageToggle