import axios from 'axios'
import { toast } from '../ui/use-toast'
import { signOut, useSession } from 'next-auth/react'
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
import { ChevronRightIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { deleteImage } from '@/lib/firebase'

const DeleteBtn = () => {
  const { user } = useSession().data ?? {}
  if (!user) return null

  const handleDelete = async () => {
    try {
      await axios.delete('/api/user')
      toast({
        title: 'Account deleted',
        description: 'Your account has been deleted',
      })
      await deleteImage(user._id, 'avatar')
      await signOut({ callbackUrl: '/login' })
    } catch (e: any) {
      toast({
        title: 'Delete account failed',
        description: e.response.data.message,
      })
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size="icon">
          <ChevronRightIcon size={24} />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Your account will be permanently deleted. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteBtn
