import { devices01 } from "@/data/database"
import DevicesInfoCard from "./InfoCard/DevicesInfoCard"

const DevicesInfoCardSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
      {
        devices01.map(item => {
          return (
            <DevicesInfoCard key={item.id} {...item} />
          )
        })
      }
    </div>
  )
}

export default DevicesInfoCardSection