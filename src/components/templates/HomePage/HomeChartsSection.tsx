'use client'
import BarChart from '@/components/modules/Charts/BarChart';
import RadialChart from '@/components/modules/Charts/RadialChart';
import { en } from '@/i18n/en';
import { FC } from 'react'
import { useTranslation } from 'react-i18next';


const HomeChartsSection: FC = () => {

    const { t } = useTranslation()
    const categories = Object.keys(en.common.days).map(key => t(`common.days.${key}`))
    const series = [
        {
            name: '',
            data: [8, 12, 10, 15, 11, 9, 5],
        },
    ]

    return (
        <div className='flex flex-col items-stretch lg:flex-row gap-5'>
            {/* barchart box */}
            <div className='lg:w-[70%] w-full p-5 neu__norm rounded-3xl h-[280px] lg:h-[400px] hover:scale-[1.02] transition-transform duration-700'>
                <BarChart categories={categories} series={series} colors={['#00b8db']} distributed={false} title={t('mainDashboard.weeklyAppointments')} maxY={20} />
            </div>
            {/* radialchart box */}
            <div className='lg:w-[30%] w-full p-5 neu__norm rounded-3xl flex flex-col h-[400px] hover:scale-[1.02] transition-transform duration-700'>
                {/* title */}
                <div className='w-full text-center font-semibold text-[16px]'>{t('mainDashboard.devicesUsage')}</div>
                {/* chart */}
                <div className='w-full h-[60%] text-teal-600 -mt-3'>
                    <RadialChart hollowSize='50%' percent={70} colors={['oklch(60% 0.118 184.704)']} />
                </div>
                {/* info */}
                <div className='grow flex flex-col gap-4 neu__inner rounded-3xl p-4 font-semibold'>
                    <div className='w-full neu__norm px-5 py-2 rounded-full flex items-center justify-between'>
                        <span className='text-blue-500'>{t('mainDashboard.activeDevices')}</span>
                        <span>4 / 6</span>
                    </div>
                    <div className='w-full neu__norm px-5 py-2 rounded-full flex items-center justify-between'>
                        <span className='text-pink-500'>{t('mainDashboard.todaysSessions')}</span>
                        <span>12</span>
                    </div>
                    <div className='w-full neu__norm px-5 py-2 rounded-full flex items-center justify-between'>
                        <span className='text-orange-500'>{t('mainDashboard.pendingAppointments')}</span>
                        <span>8</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeChartsSection