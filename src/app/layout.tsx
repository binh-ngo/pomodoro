import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pomodoro Timer',
  description: 'Serene website used to promote productivity.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className=" overflow-hidden" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
