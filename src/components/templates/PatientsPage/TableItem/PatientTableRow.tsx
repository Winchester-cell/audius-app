import { tableRowStyles } from "@/data/stylesdata"
import { MdModeEdit } from "react-icons/md"

const PatientTableRow = ({ name, patientCode, phone, gender, sessions, lastVisit }: any) => {
    return (
        <div className="text-[10px] px-7 py-5 grid grid-flow-col auto-cols-fr neu__norm rounded-2xl duration-500 transition-all hover:py-7">
            <div className={`${tableRowStyles} font_per`}>{name}</div>
            <div className={`${tableRowStyles} text-pink-500`}>{patientCode}</div>
            <div className={`${tableRowStyles} text-amber-400`}>{phone}</div>
            <div className={`${tableRowStyles} text-cyan-600`}>{gender}</div>
            <div className={`${tableRowStyles}`}>{sessions}</div>
            <div className={`${tableRowStyles} text-blue-400`}>{lastVisit}</div>
            <div className="ps-5">
                <MdModeEdit className="w-5 h-5" />
            </div>
        </div>
    )
}

export default PatientTableRow