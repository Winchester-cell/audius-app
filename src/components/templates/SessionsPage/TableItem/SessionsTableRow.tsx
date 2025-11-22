import { MdModeEdit } from "react-icons/md"

const SessionsTableRow = ({ date, time, patientName, patientCode, deviceUsed, duration, cost, status }: any) => {
    return (
        <div className="w-4xl xl:w-full text-[12px] px-7 py-5 grid grid-flow-col auto-cols-fr neu__norm rounded-2xl duration-500 transition-all hover:py-7">
            <div className="border-e-2 border-(--main-text) ps-5 flex items-center">{date} - {time}</div>
            <div className="border-e-2 border-(--main-text) ps-5 flex items-center">{patientName}</div>
            <div className="border-e-2 border-(--main-text) ps-5 flex items-center">{patientCode}</div>
            <div className="border-e-2 border-(--main-text) ps-5 flex items-center">{deviceUsed}</div>
            <div className="border-e-2 border-(--main-text) ps-5 flex items-center">{duration}</div>
            <div className="border-e-2 border-(--main-text) ps-5 flex items-center">{cost}</div>
            <div className="border-e-2 border-(--main-text) ps-5 flex items-center">{status}</div>
            <div className="ps-5 flex items-center">
                Veiw Details
            </div>
        </div>
    )
}

export default SessionsTableRow