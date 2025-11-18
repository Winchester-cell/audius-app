import HeadTitle from '@/components/modules/HeadTitles/HeadTitle'
import HomeCardsSection from '@/components/templates/HomePage/HomeCardsSection'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <div className='px-5 flex flex-col gap-5'>
      <HeadTitle title='mainDashboard.title' description='mainDashboard.titleDesc' />
      <HomeCardsSection />
    </div>
  )
}

export default Home
