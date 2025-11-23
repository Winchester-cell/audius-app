'use client'
import { patients } from "@/data/database"
import PatientTableRow from "./TableItem/PatientTableRow"
import { useTranslation } from "react-i18next"
import { tableHeadStyles } from "@/data/stylesdata"

const PatientsTable = () => {

    const {t} = useTranslation()

    return (
        <div className="rounded-2xl overflow-x-auto p-2">

            {/* Table head */}
            <div className="px-3 neu__norm rounded-t-2xl font-semibold xl:w-full w-4xl">
                <div className="text-[12px] px-7 py-5 grid grid-flow-col auto-cols-fr">
                    <div className={`${tableHeadStyles}`}>{t('patientpage.name')}</div>
                    <div className={`${tableHeadStyles}`}>{t('patientpage.patientCode')}</div>
                    <div className={`${tableHeadStyles}`}>{t('patientpage.phone')}</div>
                    <div className={`${tableHeadStyles}`}>{t('patientpage.gender')}</div>
                    <div className={`${tableHeadStyles}`}>{t('patientpage.sessions')}</div>
                    <div className={`${tableHeadStyles}`}>{t('patientpage.lastVisit')}</div>
                    <div className="ps-5">{t('patientpage.action')}</div>
                </div>
            </div>
            <div className="neu__norm rounded-b-2xl px-3 py-3 flex flex-col gap-3 xl:w-full w-4xl">
                {
                    patients.map(item => {
                        return (
                            <PatientTableRow key={item.id} {...item} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default PatientsTable