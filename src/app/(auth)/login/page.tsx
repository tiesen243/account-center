'use client'

import { CardHeader, CardTitle } from '@/components/ui/card'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const LoginForm = dynamic(() => import('@/components/auth/loginForm'), { ssr: false })

const Page: NextPage = () => (
  <>
    <CardHeader>
      <CardTitle>Login</CardTitle>
    </CardHeader>

    <LoginForm />
  </>
)

export default Page
