import { UseFormRegister } from "react-hook-form"

interface TextInputProps<T> {
    inputID: string
    place: string,
    icon: React.ElementType,
    registerKey?: keyof T,
    register?: UseFormRegister<any>,
    containerClass?: string,
    iconClass?: string,
}

const TextInput = <T,>({ place, icon: Icon, inputID, register, registerKey, iconClass = 'w-5 h-5', containerClass ='py-4 w-full gap-3'}: TextInputProps<T>) => {
    return (
        <div className={`neu__inner px-5 rounded-full flex ${containerClass} items-center`}>
            <label htmlFor={inputID} className="cursor-pointer">
                <Icon className={`${iconClass}`} />
            </label>
            <input {...((register && registerKey) ? register(registerKey.toString()) : {})} id={inputID} type="text" className="block grow" placeholder={place} />
        </div>
    )
}


export default TextInput