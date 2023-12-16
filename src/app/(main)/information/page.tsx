'use client'

import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const ChangeForm = dynamic(() => import('@/components/changeForm'), { ssr: false })
const BackBtn = dynamic(() => import('@/components/backBtn'), { ssr: false })

const Page: NextPage = () => (
  <Suspense>
    <BackBtn />
    <ChangeForm />
  </Suspense>
)

export default Page
