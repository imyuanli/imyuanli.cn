'use client'

import Link from 'next/link'
import SvgComponent from '@/components/svg-component'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import Image from 'next/image'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'

const Socialize = () => {
  return (
    <div className={'flex justify-start items-center space-x-4'}>
      <Link href={'https://github.com/imyuanli'}>
        <SvgComponent slug={'github'} />
      </Link>
      <Link href={'mailto:imyuanli@qq.com'}>
        <SvgComponent slug={'gmail'} />
      </Link>
      <div className={'hidden md:block'}>
        <HoverCard>
          <HoverCardTrigger>
            <SvgComponent slug={'wechat'} />
          </HoverCardTrigger>
          <HoverCardContent>
            <Image
              src={'/wechat.jpg'}
              alt={'imyuanli'}
              height={400}
              width={240}
              objectFit={'cover'}
            />
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className={'block md:hidden'}>
        <Drawer>
          <DrawerTrigger className={'flex justify-center items-center'}>
            <SvgComponent slug={'wechat'} />
          </DrawerTrigger>
          <DrawerContent className={'flex justify-center items-center'}>
            <Image
              src={'/wechat.jpg'}
              alt={'imyuanli'}
              height={400}
              width={240}
              objectFit={'cover'}
            />
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  )
}

export default Socialize
