import { Metadata } from 'next'

import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Prompts',
}

type Props = {
  children: JSX.Element
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />

          <main className="app">{children}</main>
        </div>
      </body>
    </html>
  )
}
