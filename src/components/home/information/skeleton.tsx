import { Skeleton } from '@/components/ui/skeleton'
import HomeLayout from '../layout'

const InfoSkeleton = () => (
  <HomeLayout
    title="Account Information"
    description="Baisc infomation, like your name and photo"
    className="grid grid-cols-1 items-center md:grid-cols-3"
  >
    <article className="col-span-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} className="my-4 h-4 w-1/2" />
      ))}
    </article>

    <Skeleton className="aspect-square w-full place-self-center rounded object-cover" />
  </HomeLayout>
)

export default InfoSkeleton
