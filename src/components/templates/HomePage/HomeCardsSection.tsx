import IncomeKPICard from "./KpiCards/IncomingKPICard"
import PatientsKPICard from "./KpiCards/PatientsKPICard"
import SessionsKPICard from "./KpiCards/SessionsKPICard"
import TotalPatientsKPICard from "./KpiCards/TotalPatientsKPICard"

const HomeCardsSection = () => {
    return (
        <div className="grid grid-cols-4 gap-5">
            <PatientsKPICard />
            <SessionsKPICard />
            <TotalPatientsKPICard />
            <IncomeKPICard />
        </div>
    )
}

export default HomeCardsSection