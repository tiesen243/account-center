'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

const User: React.FC = () => {
  const { data, status } = useSession()

  if (status == 'unauthenticated')
    return (
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
    )

  if (status == 'loading')
    return <Skeleton className="h-10 w-10 rounded-full ring-primary transition-all hover:ring-2" />

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Avatar className="ring-primary transition-all hover:ring-2">
          <AvatarImage src={data?.user.avatar} alt={data?.user.userName} />
          <AvatarFallback>{data?.user.userName}</AvatarFallback>
        </Avatar>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action will log you out of your account.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => signOut({ callbackUrl: '/' })}>
            Logout
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default User
