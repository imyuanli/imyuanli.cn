'use client'

import { Separator } from '@/components/ui/separator'
import Socialize from '@/components/socialize'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={'w-full'}>
      <Separator />
      <div
        className={
          'container py-4 flex flex-col justify-center items-center md:flex-row md:justify-between space-y-4 md:space-y-0'
        }
      >
        <div>
          © {new Date()?.getFullYear()} imyuanli. All rights reserved.
        </div>
        <a className={'text-xs'} href="https://beian.miit.gov.cn/" target="_blank">冀ICP备2020030880号-1</a>
        <Socialize />
      </div>
    </footer>
  )
}

export default Footer
