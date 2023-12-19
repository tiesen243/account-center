import Image from 'next/image'
import Link from 'next/link'
import Nav from './nav'
import ThemeBtn from './themBtn'
import User from './user'

const Header: React.FC = () => (
  <header className="sticky top-0 z-50 w-screen border-b border-secondary bg-card p-2 shadow-lg">
    <nav className="container flex max-w-screen-xl justify-between gap-4">
      <Link href="/" className="flex grow items-center gap-2">
        <Image src="/logo.svg" width={40} height={40} alt="logo" className="dark:invert" />
        <h1 className="hidden text-2xl font-bold md:block">Account Center</h1>
      </Link>

      <Nav />
      <ThemeBtn />
      <User />
    </nav>
  </header>
)

export default Header
