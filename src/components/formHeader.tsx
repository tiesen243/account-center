import { CardHeader } from '@/components/ui/card'

const FormHeader: React.FC<{ title: string }> = ({ title }) => (
  <CardHeader className="typography">
    <h2 className="text-center">{title}</h2>
  </CardHeader>
)

export default FormHeader
