import { patients } from "@/data/database"
import PatientTableRow from "./TableItem/PatientTableRow"

const PatientsTable = () => {
    return (
        <div className="w-full p-2 neu__norm rounded-3xl scale-[1]">
            <div className="w-full p-3 neu__inner rounded-2xl flex flex-col gap-3">
                {/* Table head */}
                <div className="text-[clamp(4px,1dvw,12px)] lg:text-[12px] py-3 px-4 lg:px-7 lg:py-5 grid grid-flow-col auto-cols-fr neu__norm rounded-2xl font-semibold text-white bg-(--hover-color)">
                    <div className="border-e-2 border-white ps-5">Name</div>
                    <div className="border-e-2 border-white ps-5">Patient Code</div>
                    <div className="border-e-2 border-white ps-5">Phone</div>
                    <div className="border-e-2 border-white ps-5">Gender</div>
                    <div className="border-e-2 border-white ps-5">Sessions</div>
                    <div className="border-e-2 border-white ps-5">Last Visit</div>
                    <div className="ps-5">Action</div>
                </div>
                {
                    patients.map(item => {
                        return (
                            <PatientTableRow key={item.id} {...item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PatientsTable