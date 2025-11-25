import HeadTitle from '@/components/modules/HeadTitles/HeadTitle'
import ReportsSection from '@/components/templates/ReportsPage/ReportsSection'

const ReportsPage = () => {
    return (
        <div className='px-5 pb-5 flex flex-col gap-5'>
            <HeadTitle title='reportpage.reportsAndStatistics' description='reportpage.clinicPerformanceReports' />
            <ReportsSection />
        </div>
    )
}

export default ReportsPage