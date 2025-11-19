'use client'
import { useTranslation } from "react-i18next";
import { CgList } from "react-icons/cg";

const TotalPatientsKPICard = () => {

    const { t } = useTranslation()

    return (
        <div className="neu__norm p-5 rounded-3xl flex justify-between items-center hover:scale-[1.05] transition-transform duration-700">
            <div className="font-semibold flex gap-1">
                <CgList className="lg:w-12 lg:h-12 w-10 h-10 text-cyan-500" />
                <div>
                    <h3 className="text-cyan-500">{t('mainDashboard.totalPatients')}</h3>
                    <div className="text-(--alt-text) text-[10px]">{t('mainDashboard.insystem')}</div>
                </div>
            </div>
            <div className="text-[16px] neu__inner rounded-full py-2 px-3 font-extrabold">103</div>

        </div>
    )
}

export default TotalPatientsKPICard