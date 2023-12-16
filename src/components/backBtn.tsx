'use client'

import { ChevronLeftIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'

const BackBtn: React.FC = () => {
  const { back } = useRouter()

  return (
    <Button variant="outline" size="icon" className="my-4" onClick={back}>
      <ChevronLeftIcon size={24} />
    </Button>
  )
}

export default BackBtn
