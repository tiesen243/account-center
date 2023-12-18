import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => (
  <Link href="/" className="flex grow items-center gap-2">
    <Image src="/logo.svg" width={40} height={40} alt="logo" className="dark:invert" />
    <h1 className="text-xl font-bold md:text-2xl">Account Center</h1>
  </Link>
)

export default Logo
