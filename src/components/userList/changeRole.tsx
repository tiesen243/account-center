import axios from '@/lib/axios'
import { GetToken } from '@/lib/getToken'
import IUser, { Role } from '@/types/user'
import { revalidateTag } from 'next/cache'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

const ChangeRole: React.FC<{ user: IUser }> = ({ user }) => {
  const handleSubmit = async (formData: FormData) => {
    'use server'
    const role = formData.get('role') as Role
    const token = await GetToken()

    try {
      await axios.patch(
        '/user/update/role',
        { email: user.email, role },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      revalidateTag('user')
    } catch (e: any) {}
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit role</DialogTitle>
          <DialogDescription>Change the role of {user.userName}.</DialogDescription>
        </DialogHeader>

        <form action={handleSubmit}>
          <Select defaultValue={user.role} name="role">
            <SelectTrigger>
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectLabel>Role</SelectLabel>
                {Object.values(Role).map((role) => (
                  <SelectItem key={role} value={role}>
                    {role}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <DialogFooter className="mt-4">
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ChangeRole
