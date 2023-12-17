import Logo from './logo'
import Nav from './nav'
import ThemeBtn from './themBtn'
import User from './user'

const Header: React.FC = () => (
  <header className="sticky top-0 w-screen border-b border-secondary bg-card p-2 shadow-lg">
    <nav className="container flex max-w-screen-xl justify-between gap-4">
      <Logo />

      <Nav />
      <ThemeBtn />
      <User />
    </nav>
  </header>
)

export default Header
