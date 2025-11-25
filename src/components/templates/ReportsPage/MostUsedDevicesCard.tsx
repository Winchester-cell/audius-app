import { devices } from '@/data/database'
import { useTranslation } from 'react-i18next'
import SimpleBar from 'simplebar-react'
import MostUsedDevicesItem from './ListItems/MostUsedDevicesItem'
import { BiDevices } from 'react-icons/bi'

const MostUsedDevicesCard = () => {

  const { t } = useTranslation()

  return (
    <div className="w-full flex flex-col p-2 rounded-3xl neu__norm h-[400px] hover:scale-[1.02] transition-transform duration-700">
      <h2 className="font-semibold text-[16px] flex items-center gap-2 rounded-full w-fit pb-5 pt-3 px-5">
        <BiDevices className="w-7 h-7" />
        {t('reportpage.mostUsedDevices')}
      </h2>
      <div className="w-full grow rounded-2xl px-2 py-3 neu__inner overflow-hidden">
        <SimpleBar className="h-full w-full px-5 py-2">
          <div className="flex flex-col gap-5">
            {
              devices.map((item) => {
                return (
                  <MostUsedDevicesItem key={item.id} {...item} />
                )
              })
            }
          </div>
        </SimpleBar>
      </div>
    </div>
  )

}

export default MostUsedDevicesCard