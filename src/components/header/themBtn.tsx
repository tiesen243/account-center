'use client'

import { useTheme } from 'next-themes'
import { Button } from '../ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Skeleton } from '../ui/skeleton'

const ThemeBtn: React.FC = () => {
  const { theme, resolvedTheme, setTheme } = useTheme()

  const handleClick = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return <Skeleton className="h-10 w-10" />

  return (
    <Button variant="outline" size="icon" aria-label="theme-btn" onClick={handleClick}>
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}

export default ThemeBtn
