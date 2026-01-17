import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react'
import { useFormStatus } from 'react-dom';
type Props = {
    label:string
}
const SubmitButton = ({label}:Props) => {
        const {pending}=useFormStatus();
    
  return (
    <div>
              <Button type="submit" disabled={pending}>{pending ? <LoaderCircle className="animate-spin"/>:label}</Button>

    </div>
  )
}

export default SubmitButton
