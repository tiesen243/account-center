import { toast } from '@/components/ui/use-toast'
import { uploadImage } from '@/lib/firebase'
import IUser from '@/types/user'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import * as z from 'zod'

export const changeSchema = z.object({
  avatar: z.instanceof(File).nullable(),
  userName: z.string().min(4).max(20),
})

export type IChange = z.infer<typeof changeSchema>

export const defaultValues = (user?: IUser): IChange =>
  user ? { avatar: null, userName: user.userName } : { avatar: null, userName: '' }

export const resolver = zodResolver(changeSchema)

export const onSubmit = async (fData: IChange, user: IUser, update: ({}) => void) => {
  let url: string = user.avatar
  if (fData.avatar) url = await uploadImage(fData.avatar, user._id, 'avatar')

  try {
    await axios.patch('/api/user', { ...fData, avatar: url })
    update({})
    toast({ title: 'Update success' })
  } catch (e: any) {
    toast({
      title: 'Update failed',
      description: e.response.data.message,
      variant: 'destructive',
    })
  }
}
