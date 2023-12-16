'use client'

import { toast } from '@/components/ui/use-toast'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const CheckProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const { data } = useSession()
  const { push } = useRouter()

  useEffect(() => {
    if (data) {
      toast({
        title: 'You are already logged in',
        description: 'You will be redirected to the dashboard',
      })
      push('/')
    }

    return () => {}
  }, [data, push])
  return <div className="flex h-screen w-screen items-center justify-center">{children}</div>
}

export default CheckProvider
