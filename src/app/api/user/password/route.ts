import axios from '@/lib/axios'
import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export const PATCH = async (req: NextRequest) => {
  const { token } = (await getToken({ req, secret: process.env.NEXTAUTH_SECRET })) as {
    token: string
  }
  const data = await req.json()

  try {
    await axios.patch('/user/update/password', data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return NextResponse.json({ message: 'Password updated successfully' })
  } catch (e: any) {
    const message = e.response.data.message
    const status = e.response.status
    return NextResponse.json({ message }, { status })
  }
}
