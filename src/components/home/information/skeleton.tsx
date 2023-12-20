import { Skeleton } from '@/components/ui/skeleton'
import HomeLayout from '../layout'

const InfoSkeleton = () => (
  <HomeLayout
    title="Account Information"
    description="Baisc infomation, like your name and photo"
    className="grid grid-cols-1 items-center gap-0 md:grid-cols-3 md:gap-2"
  >
    <article className="col-span-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} className="my-4 h-4 w-4/5" />
      ))}
    </article>

    <Skeleton className="row-start-1 my-4 aspect-square w-full place-self-center rounded object-cover shadow-lg md:col-start-3" />
  </HomeLayout>
)

export default InfoSkeleton
