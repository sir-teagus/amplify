import React from 'react'
import { redirect } from 'next/navigation'

import { currentUser } from '@clerk/nextjs/server'
import { UserButton, ClerkLoaded, ClerkLoading, useUser } from '@clerk/nextjs'

import { Loader2 } from 'lucide-react'

const Page = async () => {
  const auth = await currentUser()

  if (!auth) {
    redirect('/sign-in')
  }

  return (
    <>
      <ClerkLoading>
        <Loader2 className="animate-spin text-muted-foreground" />
      </ClerkLoading>
      <ClerkLoaded>
        <UserButton />
      </ClerkLoaded>
    </>
  )
}

export default Page
