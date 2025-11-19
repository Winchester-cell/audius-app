import { BiDevices } from "react-icons/bi";
const DeviceCard = ({ code, service, status, lastActive }: any) => {
    return (
        <div className="neu__norm ps-5 pe-7 py-2 rounded-full w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="neu__norm rounded-full p-2">
                    <BiDevices className="w-7 h-7" />
                </div>
                <div className="text-[10px]">
                    <div className="font-semibold ">{code}</div>
                    <div className="text-(--alt-text)">{service}</div>
                </div>
            </div>
            <div className="flex flex-col items-end text-[10px]">
                <div className="font-semibold text-teal-500">{status}</div>
                <div className="text-sky-500">{lastActive}</div>
            </div>
        </div>
    )
}

export default DeviceCard