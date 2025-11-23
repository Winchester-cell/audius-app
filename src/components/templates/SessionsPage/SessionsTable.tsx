'use client'
import { sessions } from "@/data/database"
import SessionsTableRow from "./TableItem/SessionsTableRow"
import { useTranslation } from "react-i18next"
import { tableHeadStyles } from "@/data/stylesdata"

const SessionsTable = () => {

    const { t } = useTranslation()

    return (

        <div className="rounded-2xl overflow-x-auto p-2">
            {/* Table head */}
            <div className="px-3 neu__norm rounded-t-2xl font-semibold xl:w-full w-4xl">
                <div className="text-[12px] px-7 py-5 grid grid-flow-col auto-cols-fr">
                    <div className={`${tableHeadStyles}`}>{t('sessionspage.timeAndDate')}</div>
                    <div className={`${tableHeadStyles}`}>{t('sessionspage.patientName')}</div>
                    <div className={`${tableHeadStyles}`}>{t('sessionspage.patientCode')}</div>
                    <div className={`${tableHeadStyles}`}>{t('sessionspage.usedDevice')}</div>
                    <div className={`${tableHeadStyles} ms-5`}>{t('sessionspage.duration')}</div>
                    <div className={`${tableHeadStyles}`}>{t('sessionspage.cost')}</div>
                    <div className={`${tableHeadStyles}`}>{t('sessionspage.status')}</div>
                    <div className="ps-5">{t('sessionspage.action')}</div>
                </div>
            </div>
            <div className="neu__norm rounded-b-2xl px-3 py-3 flex flex-col gap-3 xl:w-full w-4xl">
                {
                    sessions.map(item => {
                        return (
                            <SessionsTableRow key={item.id} {...item} />
                        )
                    })
                }
            </div>
        </div>

    )
}

export default SessionsTable