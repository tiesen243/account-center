'use client'

import { CardHeader, CardTitle } from '@/components/ui/card'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const RegisterForm = dynamic(() => import('@/components/auth/registerForm'), { ssr: false })

const Page: NextPage = () => (
  <>
    <CardHeader>
      <CardTitle>Register</CardTitle>
    </CardHeader>
    <RegisterForm />
  </>
)

export default Page
