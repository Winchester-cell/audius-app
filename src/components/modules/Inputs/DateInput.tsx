'use client'
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { UseFormRegister } from "react-hook-form";
import { AiFillCalendar } from "react-icons/ai";
import { formatDate } from "@/utils/formatDate";
import { useTranslation } from "react-i18next";

interface DateInputProps<T> {
    inputID: string
    registerKey?: keyof T,
    register?: UseFormRegister<any>,
    containerClass?: string,
    iconClass?: string,
}

const DateInput = <T,>({ containerClass = 'w-full py-4', inputID, register, registerKey, iconClass = 'w-5 h-5' }: DateInputProps<T>) => {

    const [selected, setSelected] = useState<DateRange | undefined>(undefined);
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const {t} = useTranslation()

    return (
        <>
            <div className="relative w-full">
                <div onClick={() => setIsVisible(true)} className={`${containerClass} neu__inner px-5 rounded-full items-center flex gap-3 cursor-pointer w-full`}>
                    <label htmlFor={inputID} className="cursor-pointer">
                        <AiFillCalendar className={`${iconClass}`} />
                    </label>
                    <div className="grow w-full">
                        {
                            !selected && <div className="w-full line-clamp-1">{t('sessionspage.pickADate')} ...</div>
                        }
                        {
                            selected && <div className="flex items-center gap-1"><span className="font-semibold">{t('common.from')}</span> {formatDate(selected.from)} <span className="font-semibold">{t('common.to')}</span> {formatDate(selected.to)} </div>
                        }
                    </div>
                    <input value={`${formatDate(selected?.from)}|${formatDate(selected?.to)}`} {...((register && registerKey) ? register(registerKey.toString()) : {})} readOnly id={inputID} className="grow cursor-pointer hidden" />
                </div>
                <div className={`scale-[0.8] ltr neu__norm w-fit h-fit p-5 rounded-2xl ${isVisible ? `visible opacity-100` : 'invisible opacity-0'} absolute top-0 -start-[120px]  md:top-2 md:-start-5 bg-(--main-bg) z-50`}>
                    <DayPicker
                        mode="range"
                        selected={selected}
                        onSelect={setSelected}
                    />
                </div>
            </div>
            {
                isVisible &&
                <div onClick={() => setIsVisible(false)} className="w-dvw h-dvh fixed top-0 start-0 z-40">
                </div>
            }
        </>
    )
}

export default DateInput