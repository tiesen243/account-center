'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import dynamic from 'next/dynamic'
import { Skeleton } from '../ui/skeleton'

const ChangeInfoForm = dynamic(() => import('./form'), {
  ssr: false,
  loading: () => (
    <CardContent className="space-y-4">
      <section>
        <Skeleton className="h-6 w-20" />
        <Skeleton className="mt-2 h-10 w-full" />
      </section>

      <section>
        <Skeleton className="h-5 w-20" />
        <Skeleton className="mt-2 h-56 w-full" />
      </section>

      <section className="flex justify-end">
        <Skeleton className="mt-4 h-10 w-40" />
      </section>
    </CardContent>
  ),
})

const ChangeInfo: React.FC = () => (
  <Card>
    <CardHeader>
      <CardTitle>Change Infomation</CardTitle>
      <article className="typography">
        <CardDescription>You can change your username and avatar here.</CardDescription>
        <blockquote className="text-sm text-muted-foreground">
          Avatar must be a square image, file type must be jpg, png, jpeg and the size must be less
          than 5MB.
        </blockquote>
      </article>
    </CardHeader>

    <ChangeInfoForm />
  </Card>
)

export default ChangeInfo
