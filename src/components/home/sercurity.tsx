'use client'

import { ChevronRight, EditIcon, KeyIcon, TrashIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Separator } from '../ui/separator'
import DeleteBtn from './deleteBtn'

const Sercurity: React.FC = () => (
  <Card>
    <CardHeader>
      <CardTitle>Account Sercurity</CardTitle>
      <CardDescription>Manage your account sercurity</CardDescription>
    </CardHeader>

    <Separator />

    <CardContent className=" mt-4 w-full space-y-4">
      <section className="flex items-center gap-2">
        <div className="h-fit w-fit rounded-full border border-primary p-2">
          <EditIcon size={24} />
        </div>

        <h2 className="grow text-2xl font-bold">Change your information</h2>

        <Button variant="outline" size="icon" className="self-end" asChild>
          <Link href="/information">
            <ChevronRight size={24} />
          </Link>
        </Button>
      </section>

      <section className="flex items-center gap-2">
        <div className="h-fit w-fit rounded-full border border-primary p-2">
          <KeyIcon size={24} />
        </div>

        <h2 className="grow text-2xl font-bold">Change your password</h2>

        <Button variant="outline" size="icon" asChild>
          <Link href="/password">
            <ChevronRight size={24} />
          </Link>
        </Button>
      </section>

      <section className="flex items-center gap-2 text-destructive">
        <div className="h-fit w-fit rounded-full border border-destructive p-2">
          <TrashIcon size={24} />
        </div>

        <h2 className="grow text-2xl font-bold">Delete Account</h2>

        <DeleteBtn />
      </section>
    </CardContent>
  </Card>
)

export default Sercurity
