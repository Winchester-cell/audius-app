import { MdModeEdit } from "react-icons/md"

const PatientTableRow = ({ name, patientCode, phone, gender, sessions, lastVisit }: any) => {
    return (
        <div className="w-4xl xl:w-full text-[12px] px-7 py-5 grid grid-flow-col auto-cols-fr neu__norm rounded-2xl duration-500 transition-all hover:py-7">
            <div className="border-e-2 border-(--main-text) ps-5">{name}</div>
            <div className="border-e-2 border-(--main-text) ps-5">{patientCode}</div>
            <div className="border-e-2 border-(--main-text) ps-5">{phone}</div>
            <div className="border-e-2 border-(--main-text) ps-5">{gender}</div>
            <div className="border-e-2 border-(--main-text) ps-5">{sessions}</div>
            <div className="border-e-2 border-(--main-text) ps-5">{lastVisit}</div>
            <div className="ps-5">
                <MdModeEdit className="w-5 h-5" />
            </div>
        </div>
    )
}

export default PatientTableRow