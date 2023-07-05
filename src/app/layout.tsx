import { Navbar } from '@/components/index'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} mx-5 mt-4 bg-white/primary`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
