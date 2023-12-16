'use client'
import { useSession } from 'next-auth/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Separator } from '../ui/separator'
import Image from 'next/image'

const Infomation: React.FC = () => {
  const { user } = useSession().data ?? {}
  if (!user) return null

  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Infomation</CardTitle>
        <CardDescription>Baisc infomation, like your name and photo</CardDescription>
      </CardHeader>
      <Separator />

      <CardContent className="grid grid-cols-3">
        <article className="typography col-span-2">
          <p>
            <b>User Name:</b> {user.userName} <br />
            <b>Role:</b> {user.role} <br />
            <b>User ID:</b> {user._id} <br />
            <b>Email:</b> {user.email} <br />
            <b>Created At:</b> {new Date(user.createdAt).toLocaleString()} <br />
            <b>Updated At:</b> {new Date(user.updatedAt).toLocaleString()}
          </p>
        </article>

        <Image
          src={user.avatar}
          alt="avatar"
          width={400}
          height={400}
          className="aspect-square place-items-center"
        />
      </CardContent>
    </Card>
  )
}

export default Infomation
