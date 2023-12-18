import type { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://account.tiesen.id.vn'),
  title: 'TN | Account Center',
  description: 'Account Center',
  openGraph: {
    type: 'profile',
    locale: 'vi_VN',
    url: 'https://account.tiesen.id.vn',
    title: 'TN | Account Center',
    description: 'Account Center',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'TN | Account Center',
      },
    ],
  },
  twitter: {
    site: '@tiesen',
    card: 'summary_large_image',
    creator: '@tiesen243',
    title: 'TN | Account Center',
    description: 'Account Center',
    images: '/logo.png',
  },
  other: {
    canonical: 'https://account.tiesen.id.vn',
  },
}

import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import AuthProvider from '@/providers/auth.provider'
import ThemeProvider from '@/providers/theme.provider'
import { GeistSans } from 'geist/font/sans'

import './globals.css'
const RootLayout: NextPage<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={cn(
        'min-h-screen overflow-x-hidden bg-background font-sans antialiased',
        GeistSans.variable
      )}
    >
      <AuthProvider>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </AuthProvider>
    </body>
  </html>
)

export default RootLayout
