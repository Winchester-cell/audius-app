'use client'
import { appointments01 } from "@/data/database"
import { tableHeadStyles } from "@/data/stylesdata"
import { useTranslation } from "react-i18next"
import AppointmentsTableRow from "./TableItem/AppointmentsTableRow"

const AppointmentsTable = () => {

    const { t } = useTranslation()

    return (
        <div className="rounded-2xl overflow-x-auto p-2">

            {/* Table head */}
            <div className="px-3 neu__norm rounded-t-2xl font-semibold xl:w-full w-4xl">
                <div className="text-[12px] px-7 py-5 grid grid-flow-col auto-cols-fr">
                    <div className={`${tableHeadStyles}`}>{t('appointmentspage.patientName')}</div>
                    <div className={`${tableHeadStyles}`}>{t('appointmentspage.patientCode')}</div>
                    <div className={`${tableHeadStyles}`}>{t('appointmentspage.date')}</div>
                    <div className={`${tableHeadStyles}`}>{t('appointmentspage.time')}</div>
                    <div className={`${tableHeadStyles}`}>{t('appointmentspage.deviceType')}</div>
                    <div className={`${tableHeadStyles}`}>{t('appointmentspage.phoneNumber')}</div>
                    <div className={`${tableHeadStyles}`}>{t('appointmentspage.status')}</div>
                    <div className="ps-5">{t('appointmentspage.operations')}</div>
                </div>
            </div>
            <div className="neu__norm rounded-b-2xl px-3 py-3 flex flex-col gap-3 xl:w-full w-4xl">
                {
                    appointments01.map(item => {
                        return (
                            <AppointmentsTableRow key={item.id} {...item} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default AppointmentsTable