import { patients, sessions } from "@/data/database"
import SessionsTableRow from "./TableItem/SessionsTableRow"

const SessionsTable = () => {
    return (
        <div className="w-full p-2 neu__norm rounded-3xl scale-[1]">
            <div className="w-full p-3 neu__inner rounded-2xl flex flex-col gap-3 overflow-x-auto">
                {/* Table head */}
                <div className="w-4xl xl:w-full text-[12px] px-7 py-5 grid grid-flow-col auto-cols-fr neu__norm rounded-2xl font-semibold text-white bg-(--hover-color)">
                    <div className="border-e-2 border-white ps-5">Time & Date</div>
                    <div className="border-e-2 border-white ps-5">Patient Name</div>
                    <div className="border-e-2 border-white ps-5">Patient Code</div>
                    <div className="border-e-2 border-white ps-5">Used Device</div>
                    <div className="border-e-2 border-white ps-5">Duration</div>
                    <div className="border-e-2 border-white ps-5">Cost</div>
                    <div className="border-e-2 border-white ps-5">Status</div>
                    <div className="ps-5">Action</div>
                </div>
                {
                    sessions.map(item => {
                        return (
                            <SessionsTableRow key={item.id} {...item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SessionsTable