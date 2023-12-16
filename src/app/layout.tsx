import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TN | Account Center',
  description: 'Account Center',
}

import { cn } from '@/lib/utils'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import ThemeProvider from '@/providers/theme.provider'
import AuthProvider from '@/providers/auth.provider'

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={cn('min-h-screen bg-background font-sans antialiased', GeistSans.variable)}>
      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
    </body>
  </html>
)

export default RootLayout
