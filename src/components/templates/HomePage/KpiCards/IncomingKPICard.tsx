'use client'
import { useTranslation } from "react-i18next";
import { BsCashCoin } from "react-icons/bs";

const IncomeKPICard = () => {

    const { t } = useTranslation()

    return (
        <div className="neu__norm p-5 rounded-3xl flex justify-between items-center hover:scale-[1.05] transition-transform duration-700">
            <div className="font-semibold flex gap-1">
                <BsCashCoin className="lg:w-12 lg:h-12 w-10 h-10 text-(--greens)" />
                <div>
                    <h3 className="text-(--greens)">{t('mainDashboard.monthlyIncome')}</h3>
                    <div className="text-(--alt-text) text-[10px]">{t('mainDashboard.toman')}</div>
                </div>
            </div>
            <div className="text-[16px] neu__inner rounded-full py-2 px-3 font-extrabold">190M</div>

        </div>
    )
}

export default IncomeKPICard