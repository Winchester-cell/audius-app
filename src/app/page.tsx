'use client'
import RecentPlaylistBox from '@/components/templates/HomePage/RecentPlaylistsBox'
import RecentTracksBox from '@/components/templates/HomePage/RecentTracksBox'
import TrendingPlaylistBox from '@/components/templates/HomePage/TrendingPlaylistBox'
import TrendingTracksBox from '@/components/templates/HomePage/TrendingTracksBox'
import { FC } from 'react'

const Home: FC = () => {  

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
