'use client'

import FormFooter from '@/components/formFooter'
import { CardContent } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { RegisterFields, defaultValues, onSubmit, resolver, type IRegister } from './config'

const RegisterForm: React.FC = () => {
  const form = useForm<IRegister>({ resolver, defaultValues })
  const { push } = useRouter()
  const isPending = form.formState.isSubmitting
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => onSubmit(data, push))}>
        <CardContent className="space-y-4">
          {Object.keys(defaultValues).map((name) => (
            <RegisterFields key={name} name={name as keyof IRegister} control={form.control}>
              {(field) => (
                <Input
                  {...field}
                  id={field.name}
                  type={field.name.includes('assword') ? 'password' : field.name}
                  disabled={isPending}
                  placeholder={`Enter your ${field.name}`}
                />
              )}
            </RegisterFields>
          ))}
        </CardContent>

        <FormFooter
          title="Register"
          disabled={isPending}
          text="Already have an account?"
          href="login"
        />
      </form>
    </Form>
  )
}

export default RegisterForm
