import { Card } from '@/components/ui/card'
import { Toaster } from '@/components/ui/toaster'
import CheckProvider from '@/providers/check.provider'

const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <CheckProvider>
    <Card className="container max-w-screen-md">{children}</Card>
    <Toaster />
  </CheckProvider>
)

export default AuthLayout
