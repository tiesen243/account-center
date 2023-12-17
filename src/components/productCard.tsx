import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export interface ProductCardProps {
  title: string
  description: string
  href: string
}

export const ProductCard: React.FC<ProductCardProps> = ({ title, description, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Card className="typography transition-colors hover:bg-secondary prose-h3:m-0">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  </a>
)
