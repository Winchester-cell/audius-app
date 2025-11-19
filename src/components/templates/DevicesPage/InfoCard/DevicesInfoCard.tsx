import { AiFillSetting, AiOutlineHistory } from "react-icons/ai"
import { BiDevices } from "react-icons/bi"
import { GiCheckMark } from "react-icons/gi"
import { IoBarcodeSharp, IoBuildOutline, IoWifi } from "react-icons/io5"
import { TbCategory } from "react-icons/tb"

const DevicesInfoCard = (props: any) => {

    const { title, model, status, serialNumber, lastUsed, installationDate, lastService, connectionStatus, category } = props
    let color: string = ''
    if (status === 'online') {
        color = 'oklch(70.4% 0.14 182.503)'
    } else if (status === 'offline') {
        color = 'oklch(70.7% 0.022 261.325)'
    } else {
        color = 'oklch(64.5% 0.246 16.439)'
    }

    return (
        <div className="rounded-3xl neu__norm p-5">
            <div style={{ color: color }} className="flex items-center gap-2">
                <BiDevices className="w-10 h-10" />
                <div>
                    <div className="font-semibold text-[14px]">{title}</div>
                    <div className="text-(--alt-text) text-[10px]">{model}</div>
                </div>
            </div>
            <div className="px-3 py-5 neu__inner mt-5 rounded-2xl flex flex-col gap-3">
                <div className="flex items-center justify-between neu__norm py-2 px-5 rounded-full">
                    <span className="font-semibold flex items-center gap-1 text-pink-500"><IoBarcodeSharp className="text-lg" />Serial Number</span>
                    <span className="text-[10px]">{serialNumber}</span>
                </div>
                <div className="flex items-center justify-between neu__norm py-2 px-5 rounded-full">
                    <span className="font-semibold flex items-center gap-1 text-cyan-500"><AiOutlineHistory className="text-lg" />Last Used</span>
                    <span className="text-[10px]">{lastUsed}</span>
                </div>
                <div className="flex items-center justify-between neu__norm py-2 px-5 rounded-full">
                    <span className="font-semibold flex items-center gap-1 text-sky-500"><IoBuildOutline className="text-lg" />Installation Date</span>
                    <span className="text-[10px]">{installationDate}</span>
                </div>
                <div className="flex items-center justify-between neu__norm py-2 px-5 rounded-full">
                    <span className="font-semibold flex items-center gap-1 text-yellow-500"><IoBuildOutline className="text-lg" />Last Service</span>
                    <span className="text-[10px]">{lastService}</span>
                </div>
                <div className="flex items-center justify-between neu__norm py-2 px-5 rounded-full">
                    <span className="font-semibold flex items-center gap-1 text-teal-500"><IoWifi className="text-lg" />Connection Status</span>
                    <span className={`${connectionStatus === 'connected' ? 'text-teal-500' : 'text-rose-500'} text-[10px] font-semibold`}>{connectionStatus}</span>
                </div>
                <div className="flex items-center justify-between neu__norm py-2 px-5 rounded-full">
                    <span className="font-semibold flex items-center gap-1 text-cyan-600"><TbCategory className="text-lg" />Category</span>
                    <span className="text-[10px]">{category}</span>
                </div>

            </div>
            <div className="flex p-5 gap-5 justify-center font-semibold">
                <button className="w-[150px] neu__norm py-4 rounded-full flex items-center gap-2 justify-center transition-all duration-700 hover:bg-(--hover-color) hover:text-white hover:scale-[1.03]"><GiCheckMark />Start Session</button>
                <button className="w-[150px] neu__norm py-4 rounded-full flex items-center gap-1 justify-center transition-all duration-700 hover:bg-(--hover-color) hover:text-white hover:scale-[1.03]"><AiFillSetting/>Settings</button>
            </div>
        </div>
    )
}

export default DevicesInfoCard