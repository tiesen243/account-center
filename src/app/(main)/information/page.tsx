'use client'

import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const BackBtn = dynamic(() => import('@/components/backBtn'), { ssr: false })
const ChangeForm = dynamic(() => import('@/components/changeForm'), {
  ssr: false,
  loading: () => <div>Loading.... </div>,
})

const Page: NextPage = () => (
  <>
    <BackBtn />
    <ChangeForm />
  </>
)

export default Page
