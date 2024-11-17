'use client'

import { Separator } from '@/components/ui/separator'
import Socialize from '@/components/socialize'

const Footer = () => {
  return (
    <footer className={'w-full'}>
      <Separator />
      <div className={'container flex justify-between items-center py-4'}>
        <div>
          © {new Date()?.getFullYear()} imyuanli, Inc. All rights reserved.{' '}
        </div>
        <Socialize />
      </div>
    </footer>
  )
}

export default Footer
