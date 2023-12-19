import type { NextPage } from 'next'

import Infomation from '@/components/home/information'
import Sercurity from '@/components/home/sercurity'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const Page: NextPage = () => (
  <>
    <h2 className="mb-4 text-center text-3xl font-bold">Account Management</h2>
    <Tabs defaultValue="info" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="info">Information</TabsTrigger>

        <TabsTrigger value="sercurity">Security</TabsTrigger>
      </TabsList>

      <TabsContent value="info">
        <Infomation />
      </TabsContent>
      <TabsContent value="sercurity">
        <Sercurity />
      </TabsContent>
    </Tabs>
  </>
)
export default Page
