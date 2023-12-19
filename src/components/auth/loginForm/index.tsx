'use client'

import FormFooter from '@/components/formFooter'
import { CardContent } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { LoginFields, defaultValues, submit, resolver, type ILogin } from './config'

const LoginForm: React.FC = () => {
  const form = useForm<ILogin>({ resolver, defaultValues })
  const isPending = form.formState.isSubmitting
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)}>
        <CardContent className="space-y-4">
          {['email', 'password'].map((name) => (
            <LoginFields key={name} name={name as keyof ILogin} control={form.control}>
              {(field) => <Input {...field} type={field.name} disabled={isPending} />}
            </LoginFields>
          ))}
        </CardContent>

        <FormFooter
          title="Login"
          disabled={isPending}
          text="Don't have an account?"
          href="register"
        />
      </form>
    </Form>
  )
}

export default LoginForm
