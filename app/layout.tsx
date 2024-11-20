import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import AosProvider from '@/provider/aos-provider'
import { personal_project } from '@/lib/constant'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'IM YUANLI',
  description:
    'imyuanli（我是鸢离），这是我的个人网站，关于我自己的介绍，记录我做的项目，我的博客网站。',
  keywords: [
    ...['imyuanli', 'yuanli', '鸢离', '鸢离的博客', ''],
    ...personal_project.map((item) => {
      return item?.name
    }),
    ...personal_project.map((item) => {
      return item?.slug
    }),
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AosProvider>{children}</AosProvider>
      </body>
    </html>
  )
}
