import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => (
  <Link href="/" className="flex grow items-center gap-2">
    <Image src="/logo.svg" width={40} height={40} alt="logo" className="dark:invert" />
    <h1 className="text-2xl font-bold">Account Center</h1>
  </Link>
)

export default Logo
