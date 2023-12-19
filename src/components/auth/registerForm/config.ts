import { Fields } from '@/components/fields'
import { toast } from '@/components/ui/use-toast'
import axios from '@/lib/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

export const registerSchema = z
  .object({
    userName: z.string().min(4),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type IRegister = z.infer<typeof registerSchema>

export const defaultValues: IRegister = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const resolver = zodResolver(registerSchema)

export const RegisterFields = Fields<IRegister>

export const onSubmit = async (data: IRegister, push: (href: string) => void) => {
  try {
    await axios.post('/auth/register', data)

    toast({ title: 'Account Created', description: 'Please login to continue' })
    push('/login')
  } catch (e: any) {
    const message = e.response.data.message
    toast({
      title: 'Registration Failed',
      description: message,
      variant: 'destructive',
    })
  }
}
