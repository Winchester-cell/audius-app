'use client'
import usePlaylistTracks from '@/hooks/queryHooks/usePlaylistTracks'
import { FC, useEffect } from 'react'

const Home: FC = () => {

  const { data } = usePlaylistTracks('eA0RD')

  useEffect(() => {
    console.log(data);
  }, [data])

  return (
    <div className='flex flex-col gap-5'>

    </div>
  )
}

export default Home
