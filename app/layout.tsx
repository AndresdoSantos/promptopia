import { Metadata } from 'next'
import { Inter } from '@next/font/google'

import '../styles/globals.css'
import { Nav } from '@components/nav'
import { Provider } from '@components/provider'

export const metadata: Metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Prompts',
}

const inter = Inter({ subsets: ['latin'] })

type Props = {
  children: JSX.Element
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className="main">
            <div className="gradient" />

            <main className="app">
              <Nav />
              {children}
            </main>
          </div>
        </Provider>
      </body>
    </html>
  )
}
