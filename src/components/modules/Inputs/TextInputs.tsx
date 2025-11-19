import { UseFormRegister } from "react-hook-form"

interface TextInputProps<T> {
    inputID: string
    place: string,
    icon: React.ElementType,
    registerKey?: keyof T,
    register?: UseFormRegister<any>,
    py?: string,
    iconW?: string,
    iconH?: string,
    width?: string,
}

const TextInput = <T,>({ place, icon: Icon, inputID, register, registerKey, width = 'w-full', py = 'py-4', iconW = 'w-5', iconH = 'h-5' }: TextInputProps<T>) => {
    return (
        <div className={`${width} neu__inner ${py} px-5 rounded-full flex gap-3`}>
            <label htmlFor={inputID} className="cursor-pointer">
                <Icon className={`${iconW} ${iconH}`} />
            </label>
            <input {...((register && registerKey) ? register(registerKey.toString()) : {})} id={inputID} type="text" className="block grow" placeholder={place} />
        </div>
    )
}


export default TextInput