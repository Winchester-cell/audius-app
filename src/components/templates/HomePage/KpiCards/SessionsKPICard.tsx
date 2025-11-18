'use client'
import { useTranslation } from "react-i18next";
import { MdEventAvailable } from "react-icons/md";

const SessionsKPICard = () => {

    const { t } = useTranslation()

    return (
        <div className="neu__norm p-5 rounded-3xl flex justify-between items-center hover:scale-[1.05] transition-transform duration-700">
            <div className="font-semibold flex gap-1">
                <MdEventAvailable className="w-14 h-14 text-pink-500" />
                <div>
                    <h3 className="text-pink-500">{t('mainDashboard.appointments')}</h3>
                    <div className="text-(--alt-text) text-[10px]">{t('mainDashboard.today')}</div>
                    <div className="text-(--alt-text) text-[10px]"><span className="text-(--greens)">9 {t('mainDashboard.completed')}</span> - <span className="text-(--reds)">1 {t('mainDashboard.canceled')}</span></div>
                </div>
            </div>
            <div className="text-[16px] neu__inner rounded-full py-2 px-3 font-extrabold">12</div>
        </div>
    )
}

export default SessionsKPICard