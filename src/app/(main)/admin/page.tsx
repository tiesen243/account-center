import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import UserList from '@/components/userList'
import { GetToken } from '@/lib/getToken'

import IUser from '@/types/user'
import { NextPage } from 'next'

const Head = ['User Name', 'Email', 'Role', 'Actions']

const Page: NextPage = async () => {
  try {
    const token = await GetToken()

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/all`, {
      headers: { Authorization: `Bearer ${token}` },
      next: {
        tags: ['user'],
      },
    })

    const data = (await res.json()) as { data: IUser[] }
    if (!data) throw new Error('No data found')

    return (
      <Table>
        <TableHeader>
          <TableRow>
            {Head.map((item, index) => (
              <TableHead key={index}>{item}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.data.map((user) => (
            <UserList user={user} key={user._id} />
          ))}
        </TableBody>
      </Table>
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
