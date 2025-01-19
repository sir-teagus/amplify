import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div>
      <MaxWidthWrapper>
        <p>Landing page</p>
        <Button variant={'destructive'}>Click here</Button>
      </MaxWidthWrapper>
    </div>
  )
}
