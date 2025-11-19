import TextInput from '@/components/modules/Inputs/TextInputs'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { HiMagnifyingGlass } from 'react-icons/hi2'

const PatientHeadControls = () => {
    return (
        <div className="flex lg:flex-row flex-col items-center gap-2 p-3">
            <button className="neu__norm px-5 w-[150px] justify-center py-3 font-semibold rounded-full flex items-center gap-1 transition-all duration-700 hover:text-white hover:bg-(--hover-color) hover:scale-[1.05]">
                <AiOutlinePlusCircle className="lg:w-5 lg:h-5 w-4 h-4" />
                Add patient
            </button>
            <div className="neu__norm p-1 rounded-full">
                <TextInput width="lg:w-[200px] w-[150px]" iconW="w-4" iconH="h-4" py="py-2" icon={HiMagnifyingGlass} place="Search ..." inputID="search_patient" />
            </div>
        </div>
    )
}

export default PatientHeadControls