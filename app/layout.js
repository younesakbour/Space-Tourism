import Header from './components/Header/Header'
import { barlow_condensed } from "@/utils/fonts"
import './globals.css'

export const metadata = {
  title: 'Space Tourism',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${barlow_condensed.className} bg-[#0B0D17] text-white overflow-hidden relative`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
