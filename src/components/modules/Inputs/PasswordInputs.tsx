'use client'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react"
import { UseFormRegister } from "react-hook-form";

interface PasswordInputProps<T> {
    inputID: string
    place: string,
    icon: React.ElementType,
    registerKey?: keyof T,
    register?: UseFormRegister<any>
}

const PasswordInput = <T,>({ place, icon: Icon, inputID, register, registerKey }: PasswordInputProps<T>) => {

    const [isPasswordVisible, setIsPassowrdVisible] = useState<boolean>(false)

    return (
        <div className="w-full neu__inner py-4 px-5 rounded-full flex gap-3">
            <label htmlFor={inputID} className="cursor-pointer">
                <Icon className="w-5 h-5" />
            </label>
            <input {...((register && registerKey) ? register(registerKey.toString()) : {})} id={inputID} type={isPasswordVisible ? 'text' : 'password'} className="block grow" placeholder={place} />
            <button className="cursor-pointer" type="button" onClick={() => setIsPassowrdVisible(!isPasswordVisible)}>
                {isPasswordVisible ? <AiOutlineEye className="w-4 h-4" /> : <AiOutlineEyeInvisible className="w-4 h-4" />}
            </button>
        </div>
    )
}

export default PasswordInput
