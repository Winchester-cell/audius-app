import { AiFillSetting } from "react-icons/ai"

const SettingsButton = () => {
    return (
        <button className="neu__norm p-3 rounded-full transition-all duration-500 hover:bg-(--hover-color) hover:scale-[1.2] hover:text-white cursor-pointer">
            <AiFillSetting className='w-4 h-4' />
        </button>
    )
}

export default SettingsButton