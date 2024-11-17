'use client'

import { Separator } from '@/components/ui/separator'
import Socialize from '@/components/socialize'

const Footer = () => {
  return (
    <footer className={'w-full'}>
      <Separator />
      <div
        className={
          'container py-4 flex flex-col justify-center items-center md:flex-row md:justify-between'
        }
      >
        <div className={'mb-4 md:mb-0'}>
          © {new Date()?.getFullYear()} imyuanli. All rights reserved.
        </div>
        <Socialize />
      </div>
    </footer>
  )
}

export default Footer
