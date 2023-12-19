import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'

import { DragAndDrop } from '@/components/drag-drop'
import FormFooter from '@/components/formFooter'
import { CardContent } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ChangeFields, type IChange, defaultValues, resolver, submit } from './config'

const ChangeInfoForm = () => {
  const { data, update } = useSession()
  const form = useForm<IChange>({ resolver, defaultValues: defaultValues(data?.user) })

  if (!data) return null
  const handleSubmit = async (fData: IChange) => await submit(fData, data.user, update)
  const disabled = form.formState.isSubmitting

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <CardContent className="space-y-4">
          <ChangeFields name="userName" control={form.control}>
            {(field) => <Input {...field} disabled={disabled} />}
          </ChangeFields>

          <ChangeFields name="avatar" control={form.control}>
            {(field) => (
              <DragAndDrop {...field} previewImg={data?.user.avatar} disabled={disabled} />
            )}
          </ChangeFields>
        </CardContent>

        <FormFooter title="Save Changes" disabled={disabled} />
      </form>
    </Form>
  )
}

export default ChangeInfoForm
