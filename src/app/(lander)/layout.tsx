import type { Metadata } from 'next'
import { Mulish as FontSans } from 'next/font/google'
import './globals.css'
import { env } from '@/env'
import { Providers } from '@/components/providers'
import { cn } from '@/lib/utils'
import { mergeOpenGraph } from '@/lib/mergeOpenGraph'
import { baseConfig } from '@/lib/config'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn('h-full font-sans antialiased relative', fontSans.variable)}>
        <Providers>
          <main className="relative flex flex-col min-h-screen">
            <div className="flex-grow flex-1">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: baseConfig.siteName,
  description: baseConfig.description,
  metadataBase: new URL(env.NEXT_PUBLIC_SERVER_URL),
  openGraph: mergeOpenGraph(),
  icons: {
    icon: '/favicon.ico',
  },
}
