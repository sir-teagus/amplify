import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="w-full flex-1 flex items-center justify-center">
      <SignIn />
    </div>
  )
}
