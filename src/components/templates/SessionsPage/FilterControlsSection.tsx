'use client'
import DateInput from "@/components/modules/Inputs/DateInput";
import MultiSelectInput from "@/components/modules/Inputs/MultiSelectInput";
import TextInput from "@/components/modules/Inputs/TextInputs";
import { BiDevices } from "react-icons/bi";
import { FaSlidersH, FaUserInjured } from "react-icons/fa";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'a1', label: 'Chocolate' },
    { value: 'a2', label: 'Strawberry' },
    { value: 'a3', label: 'Vanilla' },
]

const FilterControlsSection = () => {
    return (
        <div className="p-5 rounded-3xl neu__norm">
            <h2 className="font-bold text-[16px] flex items-center gap-2 ps-5"><FaSlidersH />Filters</h2>
            <div className="grid grid-cols-7 gap-3 mt-3">
                {/* search name */}
                <TextInput icon={FaUserInjured} place="Patient's name ..." inputID="patient_search" iconClass="w-4 h-4" containerClass="gap-2" />
                {/* devices select */}
                <div className="col-span-2"><MultiSelectInput containerClass="gap-2" place={'Device ...'} icon={BiDevices} options={options} /></div>
                {/* status select */}
                <MultiSelectInput containerClass="gap-2" place={'Status'} icon={BiDevices} options={options} menuWidth={'200px'} />
                {/* date picker */}
                <div className="col-span-2"><DateInput containerClass="py-3" place="Pick a date" inputID="date__pick" /></div>
                {/* clear button */}
                <button className="py-3 rounded-full w-[150px] neu__norm font-semibold duration-500 transition-all hover:bg-(--hover-color) hover:text-white">Clear filter</button>
            </div>
        </div>
    )
}

export default FilterControlsSection