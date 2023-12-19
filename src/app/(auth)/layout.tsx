import { Card } from '@/components/ui/card'
import CheckProvider from '@/providers/check.provider'

const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <CheckProvider>
    <main className="flex h-screen w-screen items-center justify-center">
      <Card className="container mx-4 max-w-screen-md">{children}</Card>
    </main>
  </CheckProvider>
)

export default AuthLayout
