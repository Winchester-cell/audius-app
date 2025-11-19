import { MdModeEdit } from "react-icons/md"

const PatientTableRow = ({ name, patientCode, phone, gender, sessions, lastVisit }: any) => {
    return (
        <div className="text-[clamp(4px,1dvw,12px)] lg:text-[12px] py-3 px-4 lg:px-7 lg:py-5 grid grid-flow-col auto-cols-fr neu__norm rounded-2xl">
            <div className="border-e-2 border-(--main-text) ps-5">{name}</div>
            <div className="border-e-2 border-(--main-text) ps-5">{patientCode}</div>
            <div className="border-e-2 border-(--main-text) ps-5">{phone}</div>
            <div className="border-e-2 border-(--main-text) ps-5">{gender}</div>
            <div className="border-e-2 border-(--main-text) ps-5">{sessions}</div>
            <div className="border-e-2 border-(--main-text) ps-5">{lastVisit}</div>
            <div className="ps-5">
                <MdModeEdit className="lg:w-5 lg:h-5 w-2 h-2" />
            </div>
        </div>
    )
}

export default PatientTableRow