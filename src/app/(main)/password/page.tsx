'use client'

import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const ChangePassword = dynamic(() => import('@/components/changePassword'), { ssr: false })
const BackBtn = dynamic(() => import('@/components/backBtn'), { ssr: false })

const Page: NextPage = () => (
  <Suspense>
    <BackBtn />
    <ChangePassword />
  </Suspense>
)

export default Page
