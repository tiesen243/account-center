'use client'

import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const BackBtn = dynamic(() => import('@/components/backBtn'), { ssr: false })
const ChangePassword = dynamic(() => import('@/components/changePassword'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
})

const Page: NextPage = () => (
  <>
    <BackBtn />
    <ChangePassword />
  </>
)

export default Page
