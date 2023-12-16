'use client'

import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const LoginForm = dynamic(() => import('@/components/auth/loginForm'), { ssr: false })
const FormHeader = dynamic(() => import('@/components/formHeader'), { ssr: false })

const Page: NextPage = () => (
  <>
    <FormHeader title="Login" />

    <LoginForm />
  </>
)

export default Page
