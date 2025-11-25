'use client'
import BarChart from "@/components/modules/Charts/BarChart"
import LineChart from "@/components/modules/Charts/LineChart"
import { en } from "@/i18n/en"
import { useTranslation } from "react-i18next"
import FrequentPatientsCard from "./FrequentPatientsCard"
import MostUsedDevicesCard from "./MostUsedDevicesCard"

const ReportsSection = () => {

  const { t } = useTranslation()

  const categoriesMonth = Object.keys(en.common.months).map(key => t(`common.months.${key}`))
  const categoriesDays = Object.keys(en.common.days).map(key => t(`common.days.${key}`))
  const series01 = [
    {
      name: '',
      data: [45, 52, 48, 60, 55, 58],
    },
  ]
  const series02 = [
    {
      name: '',
      data: [45, 52, 48, 60, 55, 58, 50],
    },
  ]

  return (
    <div>
      {/* time frame select */}
      <div className="p-5 rounded-3xl neu__norm flex items-center font-semibold lg:gap-3">
        <h2 className="text-[12px] lg:text-[16px] font-bold me-3">{t('reportpage.timeFrame')} : </h2>
        <button className="py-2 text-[10px] lg:text-[12px] px-5 rounded-full text-cyan-500 neu__inner">{t('reportpage.weekly')}</button>
        <button className="py-2 text-[10px] lg:text-[12px] px-5 rounded-full text-amber-500 ">{t('reportpage.monthly')}</button>
        <button className="py-2 text-[10px] lg:text-[12px] px-5 rounded-full text-pink-500 ">{t('reportpage.yearly')}</button>
      </div>
      {/* grid area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-5">
        <div className="h-[250px] lg:h-[350px] p-5 neu__norm rounded-3xl hover:scale-[1.02] transition-transform duration-700">
          <LineChart title={t('reportpage.monthlySessionProcess')} series={series01} categories={categoriesMonth} colors={['#00b8db']} maxY={80} minY={30} />
        </div>
        <div className="h-[250px] lg:h-[350px] p-5 neu__norm rounded-3xl hover:scale-[1.02] transition-transform duration-700">
          <BarChart distributed={false} title={t('reportpage.weeklyIncome')} series={series02} categories={categoriesDays} colors={['#00b8db']} maxY={65} />
        </div>
        <FrequentPatientsCard />
        <MostUsedDevicesCard />
      </div>
    </div>
  )

}

export default ReportsSection