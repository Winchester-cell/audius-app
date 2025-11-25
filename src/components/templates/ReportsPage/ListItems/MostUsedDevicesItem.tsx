import { useTranslation } from 'react-i18next'
import { BiDevices } from 'react-icons/bi'

const MostUsedDevicesItem = ({code , service}:any) => {

    const {t} = useTranslation()

    return (
        <div className="neu__norm ps-5 pe-7 py-2 rounded-full w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="neu__inner rounded-full p-2 lg:p-3">
                    <BiDevices className="lg:w-7 lg:h-7 w-5 h-5" />
                </div>
                <div className="text-[10px]">
                    <div className="font-semibold font_per">{code}</div>
                    <div className="text-(--alt-text)">{service}</div>
                </div>
            </div>
            <div className="flex flex-col font-semibold rounded-full neu__inner py-2 px-5 items-end text-[10px] lg:text-[12px] select-none text-cyan-500">
                <div>1 {t('common.session')}</div>
            </div>
        </div>
    )
}

export default MostUsedDevicesItem