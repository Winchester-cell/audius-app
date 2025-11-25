'use client'
import TextInput from '@/components/modules/Inputs/TextInputs'
import { useTranslation } from 'react-i18next'
import { BsFillBuildingFill, BsFillClipboardFill, BsFillTelephoneFill } from 'react-icons/bs'
import { HiLocationMarker } from 'react-icons/hi'

const ClinicSettingsSection = () => {

    const { t } = useTranslation()

    return (
        <div className='p-5 rounded-2xl neu__norm'>
            <h2 className="font-bold lg:text-[16px] flex items-center gap-1">
                <BsFillBuildingFill className="w-7 h-7 mb-1" />
                {t('settingspage.clinicInfo')}
            </h2>
            <div className="flex flex-col lg:flex-row items-center gap-3 mt-5">
                <TextInput inputID="clinic_name" icon={BsFillClipboardFill} place={`${t('settingspage.clinicName')} ...`} />
                <TextInput inputID="clinic_phone" icon={BsFillTelephoneFill} place={`${t('settingspage.clinicPhone')} ...`} />
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-3 mt-3">
                <TextInput containerClass="w-full lg:w-auto lg:grow gap-3 py-4" inputID="clinic_address" icon={HiLocationMarker} place={`${t('settingspage.clinicAddress')} ...`} />
                <button className="bg-teal-500 block text-white w-full lg:w-[150px] py-3 rounded-full duration-500 transition-transform hover:scale-[1.03]">{t('common.saveSettings')}</button>
            </div>
        </div>)
}

export default ClinicSettingsSection