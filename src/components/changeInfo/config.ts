import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Fields } from '@/components/fields'
import { toast } from '@/components/ui/use-toast'
import { uploadImage } from '@/lib/firebase'
import type IUser from '@/types/user'

export const changeSchema = z.object({
  avatar: z.instanceof(File).nullable(),
  userName: z.string().min(2).max(20),
})

export type IChange = z.infer<typeof changeSchema>

export const defaultValues = (user?: IUser): IChange =>
  user ? { avatar: null, userName: user.userName } : { avatar: null, userName: '' }

export const resolver = zodResolver(changeSchema)

export const ChangeFields = Fields<IChange>

export const submit = async (fData: IChange, user: IUser, update: ({}) => void) => {
  let url: string = user.avatar
  if (fData.avatar) url = await uploadImage(fData.avatar, user._id, 'avatar')

  try {
    const res = await fetch('/api/user', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...fData, avatar: url }),
    })
    if (!res.ok) throw new Error((await res.json()).message)

    update({})
    toast({ title: 'Update success' })
  } catch (e: any) {
    toast({
      title: 'Update failed',
      description: e.message,
      variant: 'destructive',
    })
  }
}
