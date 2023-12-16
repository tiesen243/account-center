'use client'

import FormFooter from '@/components/formFooter'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { defaultValues, onSubmit, resolver, type IPass } from './config'

const ChangeForm: React.FC = () => {
  const form = useForm<IPass>({ resolver, defaultValues })

  const disabled = form.formState.isSubmitting
  return (
    <Card>
      <CardHeader>
        <CardTitle>Change Infomation</CardTitle>
        <CardDescription>Change your account infomation.</CardDescription>
      </CardHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            {Object.keys(defaultValues).map((name) => (
              <FormField
                key={name}
                name={name as keyof IPass}
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor={field.name} className="capitalize">
                      {field.name.split(/(?=[A-Z])/).join(' ')}
                    </FormLabel>
                    <FormControl>
                      <Input {...field} type="password" id={field.name} disabled={disabled} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </CardContent>

          <FormFooter title="Save Changes" disabled={disabled} />
        </form>
      </Form>
    </Card>
  )
}

export default ChangeForm
