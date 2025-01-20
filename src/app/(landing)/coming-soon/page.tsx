import AnimatedRocket from '@/components/animated-rocket'
import { Heading } from '@/components/heading'
import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Page = () => {
  return (
    <div className="bg-brand-25 py-24 sm:py-32">
      <MaxWidthWrapper>
        <div className="mx-auto max-w-2xl sm:text-center">
          <AnimatedRocket />
          <Heading className="text-center">Algo incrível está chegando</Heading>
          <p className="mt-6 text-base/7 text-gray-600 max-w-prose text-center text-pretty">
            Estamos criando algo extraordinário que vai revolucionar a forma
            como você vende seus produtos digitais. Seja o primeiro a saber
            quando lançarmos!
          </p>
          <div className="flex w-full max-w-sm mx-auto items-center space-x-2 my-8">
            <Input type="email" placeholder="Email" />
            <Button className={buttonVariants({ size: 'sm' })} type="submit">
              Inscrever
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default Page
