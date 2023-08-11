import Header from '@/blocks/Header';
import './globals.css';
import 'remixicon/fonts/remixicon.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Footer from '@/blocks/Footer';

const dm_sans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Pixel Pad',
  description: 'A UI/UX template marketplace',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <link rel="icon" href="/favicon.svg" />
      <body className={`${dm_sans.className} min-h-screen w-full bg-slate-950 text-slate-50 relative`}>
        <Header />
        {children}
        <Toaster/>
        <Footer/>
      </body>
    </html>
  )
}
