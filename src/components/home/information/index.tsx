'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import HomeLayout from '../layout'
import InfoSkeleton from './skeleton'

const Information: React.FC = () => {
  const { status, data } = useSession()

  if (status === 'loading') return <InfoSkeleton />

  if (!data?.user) return null
  return (
    <HomeLayout
      title="Account Information"
      description="Baisc infomation, like your name and photo"
      className="grid grid-cols-1 items-center gap-0 md:grid-cols-3 md:gap-2"
    >
      <article className="typography col-span-2">
        <p>
          <b>User Name:</b> {data.user.userName} <br />
          <b>Role:</b> {data.user.role} <br />
          <b>Email:</b> {data.user.email} <br />
          <b>User ID:</b> {data.user._id} <br />
          <b>Created At:</b> {new Date(data.user.createdAt).toLocaleString()} <br />
          <b>Updated At:</b> {new Date(data.user.updatedAt).toLocaleString()}
        </p>
      </article>

      <Image
        src={data.user.avatar}
        alt="avatar"
        width={400}
        height={400}
        className="row-start-1 my-4 aspect-square place-self-center rounded object-cover shadow-lg md:col-start-3"
      />
    </HomeLayout>
  )
}

export default Information
