'use client'
import SavedPlaylists from "@/components/templates/SavedPage/SavedPlaylists"
import SavedTracks from "@/components/templates/SavedPage/SavedTracks"

const SavedPage = () => {
    return (
        <div className="flex flex-col gap-5">
            <SavedTracks />
            <SavedPlaylists />
        </div>
    )
}

export default SavedPage