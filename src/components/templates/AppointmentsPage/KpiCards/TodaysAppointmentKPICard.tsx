import { useTranslation } from 'react-i18next'
import { BiCalendarAlt } from 'react-icons/bi'

const TodaysAppointmentKPICard = () => {

    const { t } = useTranslation()

    return (
        <div className="neu__norm p-5 rounded-3xl flex justify-between items-center hover:scale-[1.03] duration-700 transition-transform">
            <div className="flex items-center gap-2 text-gray-400">
                <div className="p-3 neu__norm rounded-full">
                    <BiCalendarAlt className="w-8 h-8" />
                </div>
                <div className="font-bold ">{t('appointmentspage.todaysAppointments')}</div>
            </div>
            <div className="neu__inner py-2 px-5 rounded-full text-lg font-semibold">
                2
            </div>
        </div>
    )
}

export default TodaysAppointmentKPICard