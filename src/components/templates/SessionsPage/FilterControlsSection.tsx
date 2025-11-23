'use client'
import DateInput from "@/components/modules/Inputs/DateInput";
import SelectInput from "@/components/modules/Inputs/SelectInput";
import TextInput from "@/components/modules/Inputs/TextInputs";
import { devices } from "@/data/database";
import { useTranslation } from "react-i18next";
import { BiDevices } from "react-icons/bi";
import { FaSlidersH, FaUserInjured } from "react-icons/fa";

const optionsDevices = devices.map(item => {
    return { value: String(item.id), label: item.code }
})

const optionsStatus = [
    {value:'all' , label:'All'},
    {value:'online' , label:'Online'},
    {value:'offline' , label:'Offline'},
]

const FilterControlsSection = () => {

    const {t} = useTranslation()

    return (
        <div className="p-5 rounded-3xl neu__norm text-[10px]">
            <h2 className="font-bold text-[16px] flex items-center gap-2 ps-5"><FaSlidersH />{t('sessionspage.filters')}</h2>
            <div className="grid grid-cols-2 xl:grid-cols-7 gap-3 mt-3">
                {/* search name */}
                <TextInput icon={FaUserInjured} place={`${t('sessionspage.patientsName')} ...`} inputID="patient_search" iconClass="w-4 h-4" containerClass="gap-2 h-fit py-4" />
                {/* devices select */}
                <div className="xl:col-span-2"><SelectInput isSearchable={true} isMulti={true} closeMenuOnSelect={false} menuWidth={'200px'} containerClass="gap-2" place={`${t('sessionspage.device')} ...`} icon={BiDevices} options={optionsDevices} /></div>
                {/* status select */}
                <SelectInput isSearchable={false} isMulti={false} closeMenuOnSelect={true} containerClass="gap-2 h-fit" place={t('sessionspage.status')} icon={BiDevices} options={optionsStatus} menuWidth={'200px'} />
                {/* date picker */}
                <div className="xl:col-span-2"><DateInput containerClass="py-3" inputID="date__pick" /></div>
                {/* clear button */}
                <button className="text-[12px] h-fit py-3 flex items-center justify-center rounded-full  w-[150px] neu__norm font-semibold duration-500 transition-all hover:bg-(--hover-color) hover:text-white hover:scale-[1.03]">{t('sessionspage.clearFilters')}</button>
            </div>
        </div>
    )
}

export default FilterControlsSection