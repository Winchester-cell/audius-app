'use client'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FC, useState } from "react"

interface PasswordInputProps {
    inputID: string
    place: string,
    icon: React.ElementType,
}

const PasswordInput: FC<PasswordInputProps> = ({ place, icon: Icon, inputID }) => {

    const [isPasswordVisible, setIsPassowrdVisible] = useState<boolean>(false)

    return (
        <div className="w-full neu__inner py-4 px-5 rounded-full flex gap-3">
            <label htmlFor={inputID} className="cursor-pointer">
                <Icon className="w-5 h-5" />
            </label>
            <input id={inputID} type={isPasswordVisible ? 'text' : 'password'} className="block grow" placeholder={place} />
            <button className="cursor-pointer" type="button" onClick={() => setIsPassowrdVisible(!isPasswordVisible)}>
                {isPasswordVisible ? <AiOutlineEye className="w-4 h-4" /> : <AiOutlineEyeInvisible className="w-4 h-4" />}
            </button>
        </div>
    )
}

export default PasswordInput
