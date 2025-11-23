import HeadTitle from "@/components/modules/HeadTitles/HeadTitle"
import DevicesInfoCardSection from "@/components/templates/DevicesPage/DevicesInfoCardSection"
import DevicesKpiSection from "@/components/templates/DevicesPage/DevicesKpiSection"

const DevicesPage = () => {
    return (
        <div className="px-5 pb-5 flex flex-col gap-5">
            <HeadTitle title="devicespage.devices" description="devicespage.monitoringAndManagingDevices" />
            <DevicesKpiSection />
            <DevicesInfoCardSection />
        </div>
    )
}

export default DevicesPage