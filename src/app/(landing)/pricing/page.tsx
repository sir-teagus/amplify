'use client'

import { Heading } from '@/components/heading'
import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { Button } from '@/components/ui/button'
// import { client } from "@/lib/client"
// import { createCheckoutSession } from "@/lib/stripe"
// import { useUser } from "@clerk/nextjs"
// import { useMutation } from "@tanstack/react-query"
import { CheckIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Page = () => {
  // const { user } = useUser()
  const router = useRouter()

  const INCLUDED_FEATURES = [
    'Loja onlie otimizada',
    'Venda de produtos digitais',
    'Agendamentos online',
    'Lista de e-mails (leads)',
  ]

  // const { mutate: createCheckoutSession } = useMutation({
  //   mutationFn: async () => {
  //     const res = await client.payment.createCheckoutSession.$post()
  //     return await res.json()
  //   },
  //   onSuccess: ({ url }) => {
  //     if (url) router.push(url)
  //   },
  // })

  const handleGetAccess = () => {
    // if (user) {
    //   createCheckoutSession()
    // } else {
    //   router.push("/sign-in?intent=upgrade")
    // }

    router.push('/coming-soon')
  }

  return (
    <div className="bg-brand-25 py-24 sm:py-32">
      <MaxWidthWrapper>
        <div className="mx-auto max-w-2xl sm:text-center">
          <Heading className="text-center">
            Precificação simples, sem pegadinhas
          </Heading>
          <p className="mt-6 text-base/7 text-gray-600 max-w-prose text-center text-pretty">
            Inscreva-se e começe seu negócio online em minutos!
          </p>
        </div>

        <div className="bg-white mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-3xl font-heading font-semibold tracking-tight text-gray-900">
              Acesso ilimitado
            </h3>

            <p className="mt-6 text-base/7 text-gray-600">
              Oferecemos uma solução completa que elimina a complexidade do
              e-commerce, permitindo que você se concentre no que realmente
              importa: seu conteúdo.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-brand-600">
                Incluído
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              {INCLUDED_FEATURES.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <CheckIcon className="h-6 w-5 flex-none text-brand-700" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs py-8">
                <p className="text-base font-semibold text-gray-600">
                  Começe agora
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    R$ 49
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    / mês
                  </span>
                </p>

                <Button onClick={handleGetAccess} className="mt-6 px-20">
                  Assinar
                </Button>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Pagamento seguro. Começe a vender em minutos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default Page
