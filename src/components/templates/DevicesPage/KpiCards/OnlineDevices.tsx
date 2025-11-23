import { useTranslation } from "react-i18next"
import { BiDevices } from "react-icons/bi"

const OnlineDevicesKPI = () => {

    const { t } = useTranslation()

    return (
        <div className="neu__norm p-5 rounded-3xl flex justify-between items-center hover:scale-[1.03] duration-700 transition-transform">
            <div className="flex items-center gap-2 text-teal-500">
                <div className="p-3 neu__norm rounded-full">
                    <BiDevices className="w-8 h-8" />
                </div>
                <div className="font-bold ">{t('devicespage.onlineDevices')}</div>
            </div>
            <div className="neu__inner py-2 px-5 rounded-full text-lg font-semibold">
                4
            </div>
        </div>
    )
}

export default OnlineDevicesKPI