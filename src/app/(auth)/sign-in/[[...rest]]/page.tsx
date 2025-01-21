import { ClerkLoaded, ClerkLoading, SignIn } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'

export default function Page() {
  return (
    <div className="w-full flex-1 flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="font-bold text-3xl  text-[#2e2a47]">
          Bem-vindo de volta!
        </h1>
        <p className="text-base text-[#7e8ca0]">
          Entre ou crie uma conta para acessar sua loja.
        </p>
        <ClerkLoaded>
          <SignIn />
        </ClerkLoaded>
        <ClerkLoading>
          <Loader2 className="animate-spin text-muted-foreground" />
        </ClerkLoading>
      </div>
    </div>
  )
}
