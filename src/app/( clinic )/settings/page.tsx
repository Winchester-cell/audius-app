import HeadTitle from '@/components/modules/HeadTitles/HeadTitle'
import ClinicSettingsSection from '@/components/templates/SettingsPage/ClinicSettingsSection'
import ProfileSettingsSection from '@/components/templates/SettingsPage/ProfileSettingsSection'
import SystemSettingsSection from '@/components/templates/SettingsPage/SystemSettingsSection'

const SettingsPage = () => {
    return (
        <div className='px-5 pb-5 flex flex-col gap-5'>
            <HeadTitle title='settings.clinicSettings' description='settings.clinicAndProfileSettings' />
            <ClinicSettingsSection />
            <ProfileSettingsSection />
            <SystemSettingsSection />
        </div>
    )
}

export default SettingsPage