'use client'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import MainLayout from '@/components/MainLayout'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const Providers: FC<PropsWithChildren> = ({ children }) => {

    const [mounted, setMounted] = useState(false);
    const [client] = useState(() => new QueryClient());

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null

    return (
        <>
            <ThemeProvider attribute="class" defaultTheme="light">
                <QueryClientProvider client={client}>
                    <MainLayout>
                        {children}
                    </MainLayout>
                </QueryClientProvider>
            </ThemeProvider>
        </>
    )
}

export default Providers