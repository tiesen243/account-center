'use client'

import { ChevronRight, EditIcon, KeyIcon, TrashIcon } from 'lucide-react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import HomeLayout from '../layout'
const DeleteBtn = dynamic(() => import('./deleteBtn'), { ssr: false })

const Sercurity: React.FC = () => (
  <HomeLayout title="Account Security" description="Change your account information">
    <Item title="Change your information" icon={<EditIcon size={24} />}>
      <Link href="/information" className={buttonVariants({ variant: 'outline', size: 'icon' })}>
        <ChevronRight size={24} />
      </Link>
    </Item>

    <Item title="Change your password" icon={<KeyIcon size={24} />}>
      <Link href="/password" className={buttonVariants({ variant: 'outline', size: 'icon' })}>
        <ChevronRight size={24} />
      </Link>
    </Item>

    <Item title="Delete your account" icon={<TrashIcon size={24} />}>
      <DeleteBtn />
    </Item>
  </HomeLayout>
)

export default Sercurity

interface ItemProps {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
}
const Item: React.FC<ItemProps> = ({ title, icon, children }) => (
  <section className="my-4 flex items-center gap-2 text-xl">
    <div className="h-fit w-fit rounded-full border border-primary p-2">{icon}</div>
    <h2 className="grow font-bold">{title}</h2>
    {children}
  </section>
)
