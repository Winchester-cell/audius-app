'use client'

import { useTranslation } from "react-i18next"
import { AiFillSetting } from "react-icons/ai"

const SystemSettingsSection = () => {

    const { t } = useTranslation()

    const options = [
        { value: 'admin', label: 'admin' },
        { value: 'doctor', label: 'doctor' },
        { value: 'operator', label: 'operator' },
    ]

    return (
        <div className='p-5 rounded-2xl neu__norm'>
            <h2 className="font-bold lg:text-[16px] flex items-center gap-1">
                <AiFillSetting className="w-7 h-7 mb-1" />
                {t('settingspage.userProfile')}
            </h2>
            <div className="mt-5 flex flex-col gap-3">
                <label className="flex justify-between py-3 px-10 rounded-full neu__norm cursor-pointer hover:scale-[1.01] transition-transform duration-500" htmlFor="#1">
                    <div>
                        <div className="text-[10px] font-semibold">{t('settingspage.emailNotifications')}</div>
                        <div className="text-[10px]">{t('settingspage.receiveEmailAlerts')}</div>
                    </div>
                    <input id="#1" defaultChecked type="checkbox" className="accent-(--main-text) outline-(--main-text) border-(--main-text) bg-transparent" />
                </label>
                <label className="flex justify-between py-3 px-10 rounded-full neu__norm cursor-pointer hover:scale-[1.01] transition-transform duration-500" htmlFor="#1">
                    <div>
                        <div className="text-[10px] font-semibold">{t('settingspage.smsNotifications')}</div>
                        <div className="text-[10px]">{t('settingspage.receiveSmsAlerts')}</div>
                    </div>
                    <input id="#1" defaultChecked type="checkbox" className="accent-(--main-text) outline-(--main-text) border-(--main-text) bg-transparent" />
                </label>
                <label className="flex justify-between py-3 px-10 rounded-full neu__norm cursor-pointer hover:scale-[1.01] transition-transform duration-500" htmlFor="#1">
                    <div>
                        <div className="text-[10px] font-semibold">{t('settingspage.appointmentReminders')}</div>
                        <div className="text-[10px]">{t('settingspage.sendRemindersToPatients')}</div>
                    </div>
                    <input id="#1" defaultChecked type="checkbox" className="accent-(--main-text) outline-(--main-text) border-(--main-text) bg-transparent" />
                </label>
                <div className="flex justify-end">
                    <button className="bg-teal-500 block text-white w-[150px] py-3 rounded-full duration-500 transition-transform hover:scale-[1.03]">{t('common.saveSettings')}</button>
                </div>
            </div>
        </div>)
}

export default SystemSettingsSection