import { UseFormRegister } from "react-hook-form"

interface TextInputProps<T> {
    inputID: string
    place: string,
    icon: React.ElementType,
    registerKey?: keyof T,
    register?: UseFormRegister<any>
}

const TextInput = <T,>({ place, icon: Icon, inputID, register, registerKey }: TextInputProps<T>) => {
    return (
        <div className="w-full neu__inner py-4 px-5 rounded-full flex gap-3">
            <label htmlFor={inputID} className="cursor-pointer">
                <Icon className="w-5 h-5" />
            </label>
            <input {...((register && registerKey) ? register(registerKey.toString()) : {})} id={inputID} type="text" className="block grow" placeholder={place} />
        </div>
    )
}


export default TextInput