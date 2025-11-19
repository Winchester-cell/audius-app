import HeadTitle from '@/components/modules/HeadTitles/HeadTitle'
import HomeCardsSection from '@/components/templates/HomePage/HomeCardsSection'
import HomeChartsSection from '@/components/templates/HomePage/HomeChartsSection';
import HomeInfoCardsSection from '@/components/templates/HomePage/HomeInfoCardsSection';
import { FC } from 'react'



const Home: FC = () => {
  return (
    <div className='px-5 flex flex-col gap-5 pb-5'>
      <HeadTitle title='mainDashboard.title' description='mainDashboard.titleDesc' />
      <HomeCardsSection />
      <HomeChartsSection />
      <HomeInfoCardsSection />
    </div>
  )
}

export default Home
