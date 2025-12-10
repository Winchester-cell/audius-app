'use client'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import MainLayout from '@/components/MainLayout'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'

const Providers: FC<PropsWithChildren> = ({ children }) => {

    const [mounted, setMounted] = useState(false);
    const [client] = useState(() => new QueryClient());

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null

    return (

        <ThemeProvider attribute="class" defaultTheme="light">
            <QueryClientProvider client={client}>
                <SessionProvider>
                    <MainLayout>
                        {children}
                    </MainLayout>
                </SessionProvider>
            </QueryClientProvider>
        </ThemeProvider>

    )
}

export default Providers