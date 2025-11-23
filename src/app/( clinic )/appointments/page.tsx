import HeadTitle from "@/components/modules/HeadTitles/HeadTitle"
import AppointmentsKpiCardSection from "@/components/templates/AppointmentsPage/AppointmentsKpiCardSection"

const AppointmentsPage = () => {
    return (
        <div className="px-5 pb-5 flex flex-col gap-5">
            <HeadTitle title="appointmentspage.appointmentScheduling" description="appointmentspage.managingTreatmentAppointments" />
            <AppointmentsKpiCardSection />
        </div>
    )
}

export default AppointmentsPage