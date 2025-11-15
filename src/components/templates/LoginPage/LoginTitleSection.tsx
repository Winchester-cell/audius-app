'use client'
import { useTranslation } from "react-i18next"
import { FaStethoscope } from "react-icons/fa"

export const LoginTitleSection = () => {

    const { t } = useTranslation()

    return (
        <div className="flex flex-col items-center gap-1">
            <div className="font-bold flex gap-1 items-center">
                <FaStethoscope className="w-6 h-6 text-blue-500" />
                <span className="text-3xl text-teal-600">{t('login.title')}</span>
            </div>
            <div className="text-[10px]">{t('login.titleDesc')}</div>
        </div>
    )
}
