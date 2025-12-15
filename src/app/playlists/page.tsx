'use client'
import SelectInput from '@/components/modules/Inputs/SelectInput'
import PageTitleSection from '@/components/modules/PageTitleSection/PageTitleSection'
import PlaylistsPageContainer from '@/components/templates/PlaylistsPage/PlaylistsPageTracksContainer'
import { tracksPageFilterOptions } from '@/contents/reactSelectOptions'
import { Playlist } from '@/types/playlist.type'
import { useState } from 'react'
import { CgPlayList } from 'react-icons/cg'
import { FaSlidersH } from 'react-icons/fa'

const PlaylistsPage = () => {

    const [playlists, setPlaylists] = useState<Playlist[]>([])
    const [filterValue, setFilterValue] = useState<string>('trending')

    return (
        <>
            <PageTitleSection icon={CgPlayList} title='Playlists' description='Browse playlists by trending , popular or recent' >
                <SelectInput
                    onChangeHandler={(selected) => {
                        setPlaylists([])
                        setFilterValue(selected.value)
                    }}
                    icon={FaSlidersH}
                    place="Sort by ..."
                    isMulti={false}
                    closeMenuOnSelect={true}
                    isSearchable={false}
                    options={tracksPageFilterOptions}
                    containerClass="w-[190px] lg:w-[200px] gap-2"
                    iconClass="size-3"
                />
            </PageTitleSection>
            <PlaylistsPageContainer filterValue={filterValue} setPlaylists={setPlaylists} playlists={playlists} />
        </>
    )
}

export default PlaylistsPage