'use client'
import TracksPageHeadPart from "@/components/templates/TracksPage/TracksPageHeadPart"
import TracksPageTracksContainer from "@/components/templates/TracksPage/TracksPageTracksContainer"
import { Track } from "@/types/tracks.type"
import { useState } from "react"


const TrackPage = () => {

    const [tracks, setTracks] = useState<Track[]>([])
    const [filterValue, setFilterValue] = useState<string>('')

    return (
        <>
            <TracksPageHeadPart setTracks={setTracks} filterValue={filterValue} setFilterValue={setFilterValue} />
            <TracksPageTracksContainer filterValue={filterValue} tracks={tracks} setTracks={setTracks} />
        </>
    )
}

export default TrackPage