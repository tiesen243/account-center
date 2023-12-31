'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <NextThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
    {children}
  </NextThemeProvider>
)

export default ThemeProvider
