import Logo from './logo'
import ThemeBtn from './themBtn'
import User from './user'

const Header: React.FC = () => (
  <header className="sticky top-0 w-screen p-2 shadow-lg">
    <nav className="container flex max-w-screen-xl justify-between gap-4">
      <Logo />

      <ThemeBtn />
      <User />
    </nav>
  </header>
)

export default Header
