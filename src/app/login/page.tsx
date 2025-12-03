'use client'
import ControlSection from "@/components/modules/SideBar/ControlSection";
import LoginForm from "@/components/templates/LoginPage/LoginForm";


const LoginPage = () => {

    return (
        <div className={`w-dvw h-dvh flex flex-col gap-5 items-center justify-center relative`}>
            <div className="absolute top-5 lg:top-10 left-5 lg:left-10">
                <ControlSection />
            </div>
            <LoginForm />
        </div>
    )
}

export default LoginPage


