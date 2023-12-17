import { ProductCard, ProductCardProps } from '@/components/productCard'
import { NextPage } from 'next'

const Page: NextPage = () => (
  <>
    <h1 className="mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      All my productions:
    </h1>

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
