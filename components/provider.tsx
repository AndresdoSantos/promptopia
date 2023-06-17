'use client'

import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

type Props = {
  children: JSX.Element
  session: Session | null | undefined
}

export function Provider({ children, session }: Props) {
  return <SessionProvider session={session}>{children}</SessionProvider>
}
