import { tableRowStyles } from "@/data/stylesdata"
import { MdModeEdit } from "react-icons/md"

const SessionsTableRow = ({ date, time, patientName, patientCode, deviceUsed, duration, cost, status }: any) => {
    return (
        <div className="text-[10px] px-7 py-5 grid grid-flow-col auto-cols-fr neu__norm rounded-3xl">
            <div className={`${tableRowStyles}`}><span>{date}</span> - <span className="text-blue-400">{time}</span></div>
            <div className={`${tableRowStyles} font_per`}>{patientName}</div>
            <div className={`${tableRowStyles} text-blue-400`}>{patientCode}</div>
            <div className={`${tableRowStyles} text-pink-500`}><span className="line-clamp-1">{deviceUsed}</span></div>
            <div className={`${tableRowStyles} ms-6 text-amber-400`}>{duration}</div>
            <div className={`${tableRowStyles} text-teal-600`}>{cost}</div>
            <div className={`${tableRowStyles} bg-teal-500 w-fit text-white py-2 px-5 rounded-full`}>{status}</div>
            <div className="ps-5 flex items-center bg-blue-400 w-fit text-white py-2 px-5 rounded-full font-semibold cursor-pointer">
                Veiw Details
            </div>
        </div>
    )
}

export default SessionsTableRow