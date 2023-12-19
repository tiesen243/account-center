import IUser from '@/types/user'
import { TableCell, TableRow } from '../ui/table'
import ChangeRole from './changeRole'
import DeleteBtn from './deleteBtn'

const formatDate = (date: Date): string =>
  new Date(date).toLocaleDateString('vi-VN', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  })

const UserList: React.FC<{ user: IUser }> = ({ user }) => (
  <TableRow>
    <TableCell>{user.userName}</TableCell>
    <TableCell>{user.email}</TableCell>
    <TableCell>{user.role}</TableCell>
    <TableCell>{formatDate(user.createdAt)}</TableCell>
    <TableCell>{formatDate(user.updatedAt)}</TableCell>
    <TableCell className="flex items-center gap-2">
      <ChangeRole user={user} />

      <DeleteBtn id={user._id} />
    </TableCell>
  </TableRow>
)

export default UserList
