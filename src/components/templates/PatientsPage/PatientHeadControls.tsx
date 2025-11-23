'use client'
import TextInput from '@/components/modules/Inputs/TextInputs'
import { useTranslation } from 'react-i18next'
import { AiOutlinePlusCircle, AiOutlineSearch } from 'react-icons/ai'

const PatientHeadControls = () => {

    const {t} = useTranslation()

    return (
        <div className="flex lg:flex-row flex-col items-center gap-2 p-3">
            <button className="neu__norm px-5 w-[150px] justify-center py-3 font-semibold rounded-full flex items-center gap-1 transition-all duration-700 hover:text-white hover:bg-(--hover-color) hover:scale-[1.05]">
                <AiOutlinePlusCircle className="lg:w-5 lg:h-5 w-4 h-4" />
                {t('patientpage.addPatient')}
            </button>
            <div className="neu__norm p-1 rounded-full">
                <TextInput containerClass="lg:w-[200px] w-[150px] py-2 items-center gap-1" iconClass="w-4 h-4" icon={AiOutlineSearch} place={`${t('common.search')} ...`} inputID="search_patient" />
            </div>
        </div>
    )
}

export default PatientHeadControls