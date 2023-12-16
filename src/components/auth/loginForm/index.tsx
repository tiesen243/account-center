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
import { defaultValues, onSubmit, resolver, type ILogin } from './config'
import FormFooter from '@/components/formFooter'

const LoginForm: React.FC = () => {
  const form = useForm<ILogin>({ resolver, defaultValues })

  const disabled = form.formState.isSubmitting

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            {['email', 'password'].map((name) => (
              <FormField
                key={name}
                name={name as keyof ILogin}
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor={field.name} className="capitalize">
                      {field.name}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type={field.name}
                        id={field.name}
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
            title="Login"
            disabled={disabled}
            text="Don't have an account?"
            href="register"
          />
        </form>
      </Form>
    </>
  )
}

export default LoginForm
