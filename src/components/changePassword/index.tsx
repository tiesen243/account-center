'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import dynamic from 'next/dynamic'
import { Skeleton } from '../ui/skeleton'

const ChangePasswordForm = dynamic(() => import('./form'), {
  ssr: false,
  loading: () => (
    <CardContent className="space-y-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <section key={i} className="space-y-2">
          <Skeleton className="h-6 w-20 rounded" />
          <Skeleton className="h-10 w-full rounded" />
        </section>
      ))}

      <section className="flex justify-end">
        <Skeleton className="mt-4 h-10 w-40 rounded" />
      </section>
    </CardContent>
  ),
})

const ChangeForm: React.FC = () => (
  <Card>
    <CardHeader>
      <CardTitle>Change Password</CardTitle>
      <CardDescription>After changing your password, you will be logged out.</CardDescription>
    </CardHeader>

    <ChangePasswordForm />
  </Card>
)

export default ChangeForm
