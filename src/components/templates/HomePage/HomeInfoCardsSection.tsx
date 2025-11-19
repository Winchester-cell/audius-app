'use client'

import { appointments, devices } from "@/data/database"
import PatientsCard from "./ListCards/PatientsCard"
import { RiStethoscopeLine } from "react-icons/ri"
import SimpleBar from "simplebar-react"
import DeviceCard from "./ListCards/DeviceCard"
import { BiDevices } from "react-icons/bi"

const HomeInfoCardsSection = () => {
    return (
        <div className="flex gap-5">

            <div className="w-1/2 flex flex-col p-2 rounded-3xl neu__norm h-[400px]">
                <h2 className="font-semibold text-[16px] flex items-center gap-1 rounded-full w-fit py-5 px-5">
                    <RiStethoscopeLine className="w-5 h-5" />
                    Last sessions
                </h2>
                <div className="w-full grow rounded-2xl px-2 py-3 neu__inner overflow-hidden">
                    <SimpleBar className="h-full w-full px-5 py-2">
                        <div className="flex flex-col gap-5">
                            {
                                appointments.map(item => {
                                    return (
                                        <PatientsCard key={item.id} {...item} />
                                    )
                                })
                            }
                        </div>
                    </SimpleBar>
                </div>
            </div>

            <div className="w-1/2 flex flex-col p-2 rounded-3xl neu__norm h-[400px]">
                <h2 className="font-semibold text-[16px] flex items-center gap-1 rounded-full w-fit py-5 px-5">
                    <BiDevices className="w-5 h-5" />
                    Clinic's devices status
                </h2>
                <div className="w-full grow rounded-2xl px-2 py-3 neu__inner overflow-hidden">
                    <SimpleBar className="h-full w-full px-5 py-2">
                        <div className="flex flex-col gap-5">
                            {
                                devices.map(item => {
                                    return (
                                        <DeviceCard key={item.id} {...item} />
                                    )
                                })
                            }
                        </div>
                    </SimpleBar>
                </div>
            </div>
            
        </div>
    )
}

export default HomeInfoCardsSection