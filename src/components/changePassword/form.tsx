import { useForm } from 'react-hook-form'
import FormFooter from '../formFooter'
import { CardContent } from '../ui/card'
import { Form } from '../ui/form'
import { Input } from '../ui/input'
import { PassFields, defaultValues, resolver, submit, type IPass } from './config'

const ChangePasswordForm = () => {
  const form = useForm<IPass>({ resolver, defaultValues })
  const isPending = form.formState.isSubmitting

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)}>
        <CardContent className="space-y-4">
          {Object.keys(defaultValues).map((name) => (
            <PassFields key={name} name={name as keyof IPass} control={form.control}>
              {(field) => <Input {...field} type="password" disabled={isPending} />}
            </PassFields>
          ))}
        </CardContent>

        <FormFooter title="Save Changes" disabled={isPending} />
      </form>
    </Form>
  )
}

export default ChangePasswordForm
