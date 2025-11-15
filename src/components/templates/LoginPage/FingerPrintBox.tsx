'use client'
import { IoIosFingerPrint } from "react-icons/io";

import { useTranslation } from "react-i18next"

const FingerPrintBox = () => {

    const { t } = useTranslation()

    return (
        <div className="ps-10 pe-5 py-5 neu__norm w-[350px] rounded-3xl flex justify-between items-center transition-all duration-500 hover:py-7 cursor-pointer">
            <span className="text-[12px]">{t('login.fingerPrintText')}</span>
            <IoIosFingerPrint className="w-8 h-8 text-pink-400" />
        </div>
    )
}

export default FingerPrintBox