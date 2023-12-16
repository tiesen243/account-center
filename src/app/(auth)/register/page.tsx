'use client'

import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const RegisterForm = dynamic(() => import('@/components/auth/registerForm'), { ssr: false })
const FormHeader = dynamic(() => import('@/components/formHeader'), { ssr: false })

const Page: NextPage = () => (
  <>
    <FormHeader title="Register" />
    <RegisterForm />
  </>
)

export default Page
