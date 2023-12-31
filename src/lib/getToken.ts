import { getToken } from 'next-auth/jwt'
import { cookies, headers } from 'next/headers'

export async function GetToken() {
  const { token } = (await getToken({
    req: {
      headers: Object.fromEntries(headers()),
      cookies: Object.fromEntries(
        cookies()
          .getAll()
          .map((c) => [c.name, c.value])
      ),
    } as any,
  })) as { token: string }

  return token
}
