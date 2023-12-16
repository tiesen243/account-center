import Header from '@/components/header'
import { Toaster } from '@/components/ui/toaster'

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <main className="container max-w-screen-xl">{children}</main>
    <Toaster />
  </>
)

export default MainLayout
