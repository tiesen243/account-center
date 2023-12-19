'use client'
import { toast } from '@/components/ui/use-toast'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const CheckProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { status } = useSession()
  const { push } = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      push('/')
      toast({
        title: 'You are already logged in',
        description: 'You will be redirected to the home page.',
      })
    }
  }, [status]) // eslint-disable-line react-hooks/exhaustive-deps

  return <>{children}</>
}

export default CheckProvider
