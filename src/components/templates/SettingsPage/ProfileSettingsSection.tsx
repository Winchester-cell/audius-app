'use client'

import SelectInput from "@/components/modules/Inputs/SelectInput"
import TextInput from "@/components/modules/Inputs/TextInputs"
import { useTranslation } from "react-i18next"
import { AiOutlineUser } from "react-icons/ai"
import { BsFillClipboardFill } from "react-icons/bs"
import { MdSpaceDashboard } from "react-icons/md"

const ProfileSettingsSection = () => {

    const { t } = useTranslation()

    const options = [
        { value: 'admin', label: 'admin' },
        { value: 'doctor', label: 'doctor' },
        { value: 'operator', label: 'operator' },
    ]

    return (
        <div className='p-5 rounded-2xl neu__norm'>
            <h2 className="font-bold lg:text-[16px] flex items-center gap-1">
                <AiOutlineUser className="w-7 h-7 mb-1" />
                {t('settingspage.userProfile')}
            </h2>
            <div className="flex flex-col lg:flex-row items-center gap-3 mt-5">
                <TextInput containerClass="w-full lg:w-auto grow gap-3 py-4" inputID="profile_fname" icon={BsFillClipboardFill} place={`${t('common.fname')} ...`} />
                <SelectInput containerClass="w-full lg:w-auto grow gap-3 py-4" closeMenuOnSelect={true} options={options} isMulti={false} isSearchable={false} icon={MdSpaceDashboard} place={`${t('common.role')} ...`} />
                <button className="bg-teal-500 block text-white w-full lg:w-[150px] py-3 rounded-full duration-500 transition-transform hover:scale-[1.03]">{t('common.saveSettings')}</button>
            </div>
        </div>)
}

export default ProfileSettingsSection