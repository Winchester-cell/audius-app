'use client'
import OfflineDevicesKPI from "./KpiCards/OfflineDevices"
import OnlineDevicesKPI from "./KpiCards/OnlineDevices"
import RepairDevicesKPI from "./KpiCards/RepairDevices"
import TotalDevicesKPI from "./KpiCards/TotlaDevices"

const DevicesKpiSection = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5">
            <OnlineDevicesKPI />
            <OfflineDevicesKPI />
            <RepairDevicesKPI />
            <TotalDevicesKPI />
        </div>
    )
}

export default DevicesKpiSection