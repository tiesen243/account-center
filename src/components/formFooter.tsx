import { Button } from '@/components/ui/button'
import { CardFooter } from '@/components/ui/card'
import Link from 'next/link'

interface Props {
  title: string
  disabled: boolean
  text?: string
  href?: string
}

const FormFooter: React.FC<Props> = ({ title, disabled, text, href }) => (
  <CardFooter className="flex flex-col">
    {text && href && (
      <section className="flex items-center self-start">
        <p> {text} </p>
        <Button variant="link" className="capitalize" asChild>
          <Link href={`/${href}`}>{href}</Link>
        </Button>
      </section>
    )}

    <Button type="submit" disabled={disabled} className="self-end font-bold uppercase">
      {title}
    </Button>
  </CardFooter>
)

export default FormFooter
