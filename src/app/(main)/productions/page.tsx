import type { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'TN | Production',
  description: 'List of all my productions',
  openGraph: {
    title: 'TN | Production',
    description: 'List of all my productions',
    tags: ['production'],
  },
  twitter: {
    title: 'TN | Production',
    description: 'List of all my productions',
    card: 'summary_large_image',
  },
}

import { ProductCard, ProductCardProps } from '@/components/productCard'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const Page: NextPage = () => (
  <>
    <article className="typography prose-a:no-underline">
      <p>
        Hi, I&apos;m{' '}
        <a href="https://tiesen.id.vn" target="_blank" rel="noopener noreferrer">
          Tiesen
        </a>
        .
      </p>
      <p>
        This is a list of all my productions. I have been working on these projects for a long time.
      </p>

      <Button asChild>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here
        </a>
      </Button>
    </article>

    <Separator className="my-4" />

    <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {products.map((product) => (
        <li key={product.title}>
          <ProductCard {...product} />
        </li>
      ))}
    </ul>
  </>
)

export default Page

const products: ProductCardProps[] = [
  {
    title: 'E-Commerce',
    description:
      'E-Commerce application with Next.js, TypeScript, Firebase, Tailwind CSS, ShadcnUI',
    href: 'https://tn-ecommerce.tiesen.id.vn',
  },
  {
    title: 'TN Anime',
    description: 'Anime application with Next.js, Consumet API, TypeScript, Tailwind CSS, ShadcnUI',
    href: 'https://tn-anime.tiesen.id.vn',
  },
]
