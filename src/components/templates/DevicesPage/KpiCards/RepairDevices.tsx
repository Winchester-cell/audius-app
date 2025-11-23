import { useTranslation } from "react-i18next"
import { MdBuild } from "react-icons/md"

const RepairDevicesKPI = () => {

    const { t } = useTranslation()

    return (
        <div className="neu__norm p-5 rounded-3xl flex justify-between items-center hover:scale-[1.03] duration-700 transition-transform">
            <div className="flex items-center gap-2 text-amber-500">
                <div className="p-3 neu__norm rounded-full">
                    <MdBuild className="w-7 h-7" />
                </div>
                <div className="font-bold ">{t('devicespage.offlineDevices')}</div>
            </div>
            <div className="neu__inner py-2 px-5 rounded-full text-lg font-semibold">
                1
            </div>
        </div>
    )
}

export default RepairDevicesKPI