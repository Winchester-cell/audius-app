'use client'
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { UseFormRegister } from "react-hook-form";
import { AiFillCalendar } from "react-icons/ai";
import { formatDate } from "@/utils/formatDate";

interface DateInputProps<T> {
    inputID: string
    place: string,
    registerKey?: keyof T,
    register?: UseFormRegister<any>,
    containerClass?: string,
    iconClass?: string,
}

const DateInput = <T,>({ containerClass = 'w-full py-4', inputID, register, registerKey, place, iconClass = 'w-5 h-5' }: DateInputProps<T>) => {

    const [selected, setSelected] = useState<DateRange | undefined>(undefined);
    const [isVisible, setIsVisible] = useState<boolean>(false)

    return (
        <div className="relative">
            <div onClick={() => setIsVisible(true)} className={`${containerClass} neu__inner px-5 rounded-full items-center flex gap-3 cursor-pointer`}>
                <label htmlFor={inputID} className="cursor-pointer">
                    <AiFillCalendar className={`${iconClass}`} />
                </label>
                <div className="grow">
                    {
                        !selected && <span>Pick a date ...</span>
                    }
                    {
                        selected && <div className="flex items-center gap-1">{formatDate(selected.from)} <span className="font-semibold">to</span> {formatDate(selected.to)} </div>
                    }
                </div>
                <input value={`${formatDate(selected?.from)}|${formatDate(selected?.to)}`} {...((register && registerKey) ? register(registerKey.toString()) : {})} readOnly id={inputID} className="block grow cursor-pointer invisible" placeholder={place} />
            </div>
            <div className={`neu__norm w-fit h-fit p-5 rounded-2xl ${isVisible ? `visible opacity-100` : 'invisible opacity-0'} duration-500 transition-all absolute top-[55px] start-0 bg-(--main-bg) z-50`}>
                <div className="w-full h-full relative">
                    <AiOutlineClose onClick={() => setIsVisible(false)} className="absolute -top-2 -end-2 cursor-pointer" />
                    <DayPicker
                        mode="range"
                        selected={selected}
                        onSelect={setSelected}
                    />
                </div>
            </div>
        </div>
    )
}

export default DateInput