import HeadTitle from "@/components/modules/HeadTitles/HeadTitle"
import PatientHeadControls from "@/components/templates/PatientsPage/PatientHeadControls"
import PatientsTable from "@/components/templates/PatientsPage/PatientsTable"

const PatientsPage = () => {
    return (
        <div className="px-5 pb-5 flex flex-col gap-5 ">
            <HeadTitle title="Patients management" description="Manage patients info and history">
                <PatientHeadControls />
            </HeadTitle>
            <PatientsTable />
        </div>
    )
}

export default PatientsPage