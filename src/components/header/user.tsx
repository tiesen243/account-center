'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
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
} from '../ui/alert-dialog'

const User: React.FC = () => {
  const { user } = useSession().data ?? {}
  const logout = () => signOut({ callbackUrl: '/' })

  if (!user)
    return (
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
    )

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Avatar className="ring-2 transition-all ease-linear hover:ring-primary">
                <AvatarImage src={user.avatar} alt={user.userName} />
                <AvatarFallback>{user.userName}</AvatarFallback>
              </Avatar>
            </TooltipTrigger>

            <TooltipContent className="mt-2">{user.userName}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
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
          <AlertDialogAction onClick={logout}>Logout</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default User
