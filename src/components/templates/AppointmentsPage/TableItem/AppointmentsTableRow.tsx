import { tableRowStyles } from '@/data/stylesdata'
import { MdModeEdit } from 'react-icons/md'

const AppointmentsTableRow = ({ patientName, patientCode, date, time, deviceType, phoneNumber, status }: any) => {
    return (
        <div className="text-[10px] px-7 py-5 grid grid-flow-col auto-cols-fr neu__norm rounded-2xl duration-500 transition-all hover:py-7">
            <div className={`${tableRowStyles} font_per`}>{patientName}</div>
            <div className={`${tableRowStyles} text-pink-500`}>{patientCode}</div>
            <div className={`${tableRowStyles} text-amber-400`}>{date}</div>
            <div className={`${tableRowStyles} text-cyan-600`}>{time}</div>
            <div className={`${tableRowStyles} w-[100px]`}><span className='line-clamp-1'>{deviceType}</span></div>
            <div className={`${tableRowStyles} text-blue-400`}>{phoneNumber}</div>
            <div className={`${tableRowStyles} text-teal-500`}>{status}</div>
            <div className="ps-5 flex items-center gap-3">
                <MdModeEdit className="w-5 h-5" />
            </div>
        </div>
    )
}

export default AppointmentsTableRow