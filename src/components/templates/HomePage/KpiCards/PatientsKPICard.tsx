'use client'
import { useTranslation } from "react-i18next";
import { FaUserInjured } from "react-icons/fa";

const PatientsKPICard = () => {

  const { t } = useTranslation()

  return (
    <div className="neu__norm p-5 rounded-3xl flex justify-between items-center hover:scale-[1.05] transition-transform duration-700">
      <div className="font-semibold flex gap-1">
        <FaUserInjured className="w-10 h-10" />
        <div>
          <h3>{t('mainDashboard.newPatient')}</h3>
          <div className="text-(--alt-text) text-[10px]">{t('mainDashboard.thisWeak')}</div>
        </div>
      </div>
      <div className="text-[16px] neu__inner  rounded-full py-2 px-3 font-extrabold">33</div>

    </div>
  )
}

export default PatientsKPICard