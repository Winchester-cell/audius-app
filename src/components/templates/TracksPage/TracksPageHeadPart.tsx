import SelectInput from "@/components/modules/Inputs/SelectInput"
import { ReactSelectOptions } from "@/types/react-select.type"
import { Track } from "@/types/tracks.type"
import { Dispatch, FC, SetStateAction } from "react"
import { FaSlidersH } from "react-icons/fa"
import { IoMdMusicalNote } from "react-icons/io"

interface TracksPageHeadPartProps {
    filterValue: string
    setFilterValue: Dispatch<SetStateAction<string>>
    setTracks:Dispatch<SetStateAction<Track[]>>
}

const filterOptions: ReactSelectOptions = [
    { label: 'Trending', value: 'trending' },
    { label: 'Popular', value: 'popular' },
    { label: 'Recent', value: 'recent' },
]

const TracksPageHeadPart: FC<TracksPageHeadPartProps> = ({ setTracks , setFilterValue }) => {

    const onChangeHandler = (selected: any) => {
        setTracks([])
        setFilterValue(selected.value)
    }

    return (
        <div className="w-full flex items-center justify-between neu__norm px-10 py-5 rounded-3xl select-none">
            <h2 className="font-bold text-[14px] lg:text-[16px] flex items-center gap-1">
                <IoMdMusicalNote className="size-5" />
                Tracks
            </h2>
            <SelectInput
                onChangeHandler={onChangeHandler}
                icon={FaSlidersH}
                place="Filter by ..."
                isMulti={false}
                closeMenuOnSelect={true}
                isSearchable={false}
                options={filterOptions}
                containerClass="w-[160px] lg:w-[200px] gap-2"
                iconClass="size-3"
            />
        </div>
    )
}

export default TracksPageHeadPart