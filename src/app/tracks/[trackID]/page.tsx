'use client'
import TrackInfoAndActionBox from "@/components/templates/TrackPage/TrackInfoAndActionBox"
import useTrackQuery from "@/hooks/queryHooks/useTrackQuery"
import { useParams } from "next/navigation"

const TrackPage = () => {

    const { trackID } = useParams()
    const { data } = useTrackQuery(trackID as string)

    return (
        <div className="flex flex-col gap-5 h-[calc(100dvh-120px)]">
            {data && <TrackInfoAndActionBox {...data.data} />}
        </div>
    )
}

export default TrackPage