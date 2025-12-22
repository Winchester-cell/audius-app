'use client'
import useSavedPlaylists from '@/hooks/queryHooks/useSavedPlaylists'
import usePagination from '@/hooks/usePagination'
import SavedBox from './SavedBox'
import SavedPlayListCard from '@/components/modules/Cards/SavedPlayListCard'
import { SavedPlaylistPayload } from '@/types/saved-list.type'

const SavedPlaylists = () => {

    const { data } = useSavedPlaylists()
    const paginationProps = usePagination<SavedPlaylistPayload>(data, 4)

    return (
        <SavedBox paginationProps={paginationProps} sectionTitle="Saved Tracks">
            {paginationProps.slicedList && paginationProps.slicedList.map(playlist => <SavedPlayListCard key={playlist.playlistID} {...playlist} />)}
        </SavedBox>
    )
}

export default SavedPlaylists