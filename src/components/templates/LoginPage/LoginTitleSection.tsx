'use client'
import { useTranslation } from "react-i18next"
import { FaStethoscope } from "react-icons/fa"

export const LoginTitleSection = () => {

    const { t } = useTranslation()

    return (
        <div className="flex flex-col items-center gap-1">
            <img className="h-[30px]" src="/logo.png" alt="" />
            <div className="text-[10px]">{t('login.titleDesc')}</div>
        </div>
    )
}
