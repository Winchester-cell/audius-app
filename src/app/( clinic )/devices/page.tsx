import HeadTitle from "@/components/modules/HeadTitles/HeadTitle"
import DevicesInfoCardSection from "@/components/templates/DevicesPage/DevicesInfoCardSection"
import DevicesKpiSection from "@/components/templates/DevicesPage/DevicesKpiSection"

const DevicesPage = () => {
    return (
        <div className="px-5 pb-5 flex flex-col gap-5">
            <HeadTitle title="Devices" description="Monotiring and managing devices" />
            <DevicesKpiSection />
            <DevicesInfoCardSection />
        </div>
    )
}

export default DevicesPage