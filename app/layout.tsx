import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { CursorSpotlight } from '@/components/interactive/CursorSpotlight'
import { EmotionRegistry } from './registry'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Frontend Engineer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: `try{if(localStorage.getItem('theme')==='light'){document.documentElement.setAttribute('data-theme','indigo');}}catch(e){}` }} />
        <EmotionRegistry>
          <CursorSpotlight />
          {children}
        </EmotionRegistry>
      </body>
    </html>
  )
}
