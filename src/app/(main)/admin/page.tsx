import type { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'TN | Admin Center',
  description: 'List of all users',
  openGraph: {
    title: 'TN | Admin Center',
    description: 'List of all users',
    tags: ['user'],
  },
  twitter: {
    title: 'TN | Admin Center',
    description: 'List of all users',
    card: 'summary_large_image',
  },
}

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import UserList from '@/components/userList'
import { GetToken } from '@/lib/getToken'
import type IUser from '@/types/user'

const heads: string[] = ['User Name', 'Email', 'Role', 'Created At', 'Updated At', 'Actions']

const Page: NextPage = async () => {
  try {
    const token = await GetToken()
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/all`, {
      headers: { Authorization: `Bearer ${token}` },
      next: { tags: ['user'] },
    })
    const data = (await res.json()) as { data: IUser[] }
    if (!data) throw new Error('No data found')

    return (
      <>
        <h1 className="mb-4 text-center text-3xl font-semibold">User List</h1>
        <Table>
          <TableHeader className="sticky inset-0 bg-card">
            <TableRow>
              {heads.map((item) => (
                <TableHead key={item} className="whitespace-nowrap">
                  {item}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.data.map((user) => (
              <UserList user={user} key={user._id} />
            ))}
          </TableBody>

          <TableFooter className="sticky bottom-0 left-0">
            <TableRow>
              <TableCell colSpan={5}>Total users</TableCell>
              <TableCell className="text-right">{data.data.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </>
    )
  } catch (e: any) {
    return (
      <article className="typography flex h-[80vh] flex-col items-center justify-center">
        <h1>Something went wrong</h1>
        <p>{e.response ? e.response.data.message : e.message}</p>
      </article>
    )
  }
}

export default Page
