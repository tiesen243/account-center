'use client'

import { useTheme } from 'next-themes'
import { Button } from '../ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

const ThemeBtn: React.FC = () => {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  const handleClick = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

  useEffect(() => setMounted(true), [])

  return (
    mounted && (
      <Button variant="outline" size="icon" onClick={handleClick}>
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </Button>
    )
  )
}

export default ThemeBtn
