import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import * as z from 'zod'
import { toast } from '../ui/use-toast'
import { signOut } from 'next-auth/react'

export const passwordSchema = z
  .object({
    oldPassword: z.string().min(8, 'Password must be at least 8 characters'),
    newPassword: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().min(8, 'Password must be at least 8 characters'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type IPass = z.infer<typeof passwordSchema>

export const defaultValues: IPass = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
}

export const resolver = zodResolver(passwordSchema)

export const onSubmit = async (fData: IPass) => {
  try {
    await axios.patch('/api/user/password', fData)
    toast({
      title: 'Password changed',
      description: 'You will be logged out now',
    })
    await signOut({ callbackUrl: '/login' })
  } catch (e: any) {
    toast({
      title: 'Failed to change password',
      description: e.response.data.message,
      variant: 'destructive',
    })
  }
}
