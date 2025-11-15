'use client'
import ControlSection from "@/components/modules/SideBar/ControlSection";
import FingerPrintBox from "@/components/templates/LoginPage/FingerPrintBox";
import LoginForm from "@/components/templates/LoginPage/LoginForm";
import { useTranslation } from "react-i18next";

const LoginPage = () => {

    const {i18n} = useTranslation()

    return (
        <div className={`w-dvw h-dvh flex flex-col gap-5 items-center justify-center relative ${i18n.language === 'fa' ? 'rtl' : ''}`}>
            <div className="absolute top-5 lg:top-10 left-5 lg:left-10">
                <ControlSection />
            </div>
            <LoginForm />
            <FingerPrintBox />
        </div>
    )
}

export default LoginPage


