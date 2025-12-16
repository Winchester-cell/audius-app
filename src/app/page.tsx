'use client'
import RecentPlaylistBox from '@/components/templates/HomePage/RecentPlaylistsBox'
import RecentTracksBox from '@/components/templates/HomePage/RecentTracksBox'
import TrendingPlaylistBox from '@/components/templates/HomePage/TrendingPlaylistBox'
import TrendingTracksBox from '@/components/templates/HomePage/TrendingTracksBox'
import { useSession } from 'next-auth/react'
import { FC, useEffect } from 'react'

const Home: FC = () => {

  const { data } = useSession()

  useEffect(() => {
    if (data) {
      console.log(data.user.id);
    }
  }, [data])

  return (
    <div className='flex flex-col gap-5 w-full'>
      <TrendingTracksBox />
      <TrendingPlaylistBox />
      <RecentTracksBox />
      <RecentPlaylistBox />
    </div>
  )

}

export default Home
