import './globals.css'
import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import Modal from './components/modals/Modal'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wildclaw',
  description: 'Hotel website',
}

//this is font
const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal title='hello world' actionlabel='Submit' isOpen />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
