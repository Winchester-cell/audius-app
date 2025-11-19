import { BiDevices } from "react-icons/bi"

const TotalDevicesKPI = () => {
    return (
        <div className="neu__norm p-5 rounded-3xl flex justify-between items-center hover:scale-[1.03] duration-700 transition-transform">
            <div className="flex items-center gap-2 text-cyan-500">
                <div className="p-3 neu__norm rounded-full">
                    <BiDevices className="w-7 h-7" />
                </div>
                <div className="font-bold ">Total devices</div>
            </div>
            <div className="neu__inner py-2 px-5 rounded-full text-lg font-semibold">
                6
            </div>
        </div>
    )
}

export default TotalDevicesKPI