'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { useSession } from 'next-auth/react'
import { type IChange, onSubmit, resolver, defaultValues } from './config'
import { Input } from '@/components/ui/input'
import { DragAndDrop } from '@/components/drag-drop'
import FormFooter from '@/components/formFooter'

const ChangeForm: React.FC = () => {
  const { data, update } = useSession()
  const form = useForm<IChange>({ resolver, defaultValues: defaultValues(data?.user) })
  if (!data) return null

  const disabled = form.formState.isSubmitting
  return (
    <Card>
      <CardHeader>
        <CardTitle>Change Infomation</CardTitle>
        <CardDescription>Change your account infomation.</CardDescription>
      </CardHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit((fData) => onSubmit(fData, data.user, update))}>
          <CardContent className="space-y-4">
            <FormField
              name="userName"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor={field.name} className="capitalize">
                    {field.name}
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type={field.name} id={field.name} disabled={disabled} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="avatar"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor={field.name} className="capitalize">
                    {field.name}
                  </FormLabel>
                  <FormControl>
                    <DragAndDrop {...field} previewImg={data.user.avatar} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>

          <FormFooter title="Save Changes" disabled={disabled} />
        </form>
      </Form>
    </Card>
  )
}

export default ChangeForm
