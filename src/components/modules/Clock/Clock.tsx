"use client"
import React, { useEffect, useState } from "react"

const Clock: React.FC = () => {

    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    const time = new Intl.DateTimeFormat("en", {
        hour: "2-digit",
        minute: "2-digit",
    }).format(now)

    const date = new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(now)

    const weekday = new Intl.DateTimeFormat("en", {
        weekday: "long",
    }).format(now)

    return (
        <div className="flex items-center gap-2  py-2 px-5 rounded-full bg-(--hover-color) text-white  shadow-inner">
            <div className="text-[10px] font-bold">{time}</div>
            <div className="text-[10px]">{weekday}</div>
            <div className="text-[10px]">{date}</div>
        </div>
    )

}

export default Clock
