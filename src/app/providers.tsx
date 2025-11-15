'use client'
import '@/i18n'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import MainLayout from '@/components/MainLayout'
import { ThemeProvider } from 'next-themes'

const Providers: FC<PropsWithChildren> = ({ children }) => {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted) return null

    return (
        <>
            <ThemeProvider attribute="class" defaultTheme="light">
                <MainLayout>
                    {children}
                </MainLayout>
            </ThemeProvider>
        </>
    )
}

export default Providers