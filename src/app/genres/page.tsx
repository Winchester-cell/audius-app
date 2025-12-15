'use client'
import MusicGenreBox from "@/components/templates/GenrePage/MusicGenreBox"
import { genresList } from "@/contents/genreList"

const GenresPage = () => {
    return (
        <div className="flex flex-col gap-5 w-full">
            {genresList.map(genre => <MusicGenreBox key={genre} genreName={genre} />)}
        </div>
    )
}

export default GenresPage