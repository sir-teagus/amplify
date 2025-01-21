import React from 'react'
import Link from 'next/link'
import { ArrowRight, Leaf } from 'lucide-react'

import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import { SignOutButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'

export const Navbar = async () => {
  const user = await currentUser()

  return (
    <nav className="sticky z-[100] h-16 w-full inset-x-0 top-0 border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold text-2xl">
            <Leaf className="w-8 h-8 text-brand-700" />
            <span className="pl-2">amplify</span>
          </Link>

          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <SignOutButton>
                  <Button size="sm" variant="ghost">
                    Sair
                  </Button>
                </SignOutButton>

                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    size: 'sm',
                    className: 'flex items-center gap-1',
                  })}
                >
                  Dashboard <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/pricing"
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}
                >
                  Preço
                </Link>
                <Link
                  href="/sign-in"
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}
                >
                  Entrar
                </Link>

                <div className="h-8 w-px bg-gray-200" />

                <Link
                  href="/sign-up"
                  className={buttonVariants({
                    size: 'sm',
                    className: 'flex items-center gap-1.5',
                  })}
                >
                  Começar <ArrowRight className="size-4" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
