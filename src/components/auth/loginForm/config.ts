import { toast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import * as z from 'zod'

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type ILogin = z.infer<typeof loginSchema>

export const defaultValues: ILogin = {
  email: '',
  password: '',
}

export const resolver = zodResolver(loginSchema)

export const onSubmit = async (data: ILogin) => {
  try {
    const res = await signIn('credentials', { ...data, redirect: false })
    if (res?.error) throw new Error(res.error)
  } catch (e: any) {
    toast({
      title: 'Login Error',
      description: e.message,
      variant: 'destructive',
    })
  }
}
