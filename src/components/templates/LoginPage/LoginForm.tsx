'use client'
import PasswordInput from '@/components/modules/Inputs/PasswordInputs'
import { useTranslation } from 'react-i18next'
import { BiUser } from 'react-icons/bi'
import { CgKey } from 'react-icons/cg'
import { LoginTitleSection } from './LoginTitleSection'
import TextInput from '@/components/modules/Inputs/TextInputs'
import { useForm } from 'react-hook-form'

interface LoginInputProps {
    employeeID: string,
    password: string
}

const LoginForm = () => {

    const { t } = useTranslation()
    const { register, handleSubmit } = useForm<LoginInputProps>()

    const loginHandler = async (data:LoginInputProps) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(loginHandler)} className='w-[350px] neu__norm rounded-3xl p-5 transition-all duration-500 hover:py-7'>
            {/* Title section */}
            <LoginTitleSection />
            {/* Inputs section */}
            <div className="mt-9 flex flex-col gap-5">
                {/* Username input */}
                <TextInput<LoginInputProps> registerKey='employeeID' register={register} icon={BiUser} place={t('login.employeeIDPlaceHolder')} inputID="employee_ID" />
                {/* Passowrd input */}
                <PasswordInput<LoginInputProps> registerKey='password' register={register} icon={CgKey} place={t('common.password')} inputID="employee_password" />
                {/* Submit button  */}
                <button type='submit' className='neu__norm py-3 rounded-full font-semibold hoverEffect'>{t('login.signIn')}</button>
            </div>
        </form>
    )
}

export default LoginForm