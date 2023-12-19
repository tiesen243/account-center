import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Separator } from '../ui/separator'

interface Props {
  title: string
  description: string
  className?: string
  children: React.ReactNode
}
const HomeLayout: React.FC<Props> = ({ title, description, className, children }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>

    <Separator />

    <CardContent className={className}>{children}</CardContent>
  </Card>
)

export default HomeLayout
