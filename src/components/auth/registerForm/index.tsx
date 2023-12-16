'use client'

import { CardContent } from '@/components/ui/card'
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
import { type IRegister, resolver, defaultValues, onSubmit } from './config'
import { useRouter } from 'next/navigation'
import FormFooter from '@/components/formFooter'

const RegisterForm: React.FC = () => {
  const form = useForm<IRegister>({ resolver, defaultValues })
  const { push } = useRouter()

  const disabled = form.formState.isSubmitting

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => onSubmit(data, push))}>
          <CardContent className="space-y-4">
            {Object.keys(defaultValues).map((name) => (
              <FormField
                key={name}
                name={name as keyof IRegister}
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor={field.name} className="capitalize">
                      {field.name.split(/(?=[A-Z])/).join(' ')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id={field.name}
                        type={field.name.includes('assword') ? 'password' : field.name}
                        disabled={disabled}
                        placeholder={`Enter your ${field.name}`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </CardContent>

          <FormFooter
            title="Register"
            disabled={disabled}
            text="Already have an account?"
            href="login"
          />
        </form>
      </Form>
    </>
  )
}

export default RegisterForm
