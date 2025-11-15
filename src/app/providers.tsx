'use client'
import '@/i18n'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import MainLayout from '@/components/MainLayout'
import { ThemeProvider } from 'next-themes'
import SideBar from '@/components/modules/SideBar/SideBar'

const Providers: FC<PropsWithChildren> = ({ children }) => {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted) return null

    return (
        <>
            <ThemeProvider attribute="class" defaultTheme="light">
                <SideBar />
                <MainLayout>
                    {children}
                </MainLayout>
            </ThemeProvider>
        </>
    )
}

export default Providers