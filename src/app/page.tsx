'use client'
import SectionCard from '@/components/modules/Cards/SectionCard'
import TrackCard from '@/components/modules/Cards/TrackCard'
import useTracks from '@/hooks/queryHooks/useTracks'
import useTrendingTracks from '@/hooks/queryHooks/useTrendingTracks'
import { FC, useState } from 'react'

const Home: FC = () => {

  const [streamUrl, setStreamUrl] = useState('')
  const { data } = useTrendingTracks('limit=20')
  const { data: popTracks } = useTracks('limit=20&genre=Pop')
  const { data: houseTracks } = useTracks('limit=20&genre=House')

  return (
    <div className='flex flex-col gap-5'>
      <audio controls src={streamUrl}></audio>
      <SectionCard sectionTitle='Trending' buttonTitle='Browse all' >
        {
          data && data.data.map(track => <TrackCard setStreamUrl={setStreamUrl} key={track.id} {...track} />)
        }
      </SectionCard>
      <SectionCard sectionTitle='Pop' buttonTitle='Browse all' >
        {
          popTracks && popTracks.data.map(track => <TrackCard setStreamUrl={setStreamUrl} key={track.id} {...track} />)
        }
      </SectionCard>
      <SectionCard sectionTitle='House' buttonTitle='Browse all' >
        {
          houseTracks && houseTracks.data.map(track => <TrackCard setStreamUrl={setStreamUrl} key={track.id} {...track} />)
        }
      </SectionCard>
    </div>
  )
}

export default Home
