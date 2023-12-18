'use client'

import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import { useSession } from 'next-auth/react'

const Nav: React.FC = () => {
  const { role } = useSession().data?.user || {}

  return (
    <ul className="hidden items-center gap-2 md:flex">
      <Link href="/productions" passHref legacyBehavior>
        <li className={buttonVariants({ variant: 'link', className: 'cursor-pointer' })}>
          Productions
        </li>
      </Link>

      {role === 'admin' && (
        <Link href="/admin" passHref legacyBehavior>
          <li className={buttonVariants({ variant: 'link', className: 'cursor-pointer' })}>
            Admin
          </li>
        </Link>
      )}
    </ul>
  )
}

export default Nav
