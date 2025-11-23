'use client'
import ConfirmedKPICard from "./KpiCards/ConfirmedKPICard"
import PendingKPICard from "./KpiCards/PendingKPICard"
import TodaysAppointmentKPICard from "./KpiCards/TodaysAppointmentKPICard"

const AppointmentsKpiCardSection = () => {
  return (
    <div className="grid gap-5 grid-cols-1 xl:grid-cols-3">
      <TodaysAppointmentKPICard />
      <ConfirmedKPICard />
      <PendingKPICard />
    </div>
  )
}

export default AppointmentsKpiCardSection