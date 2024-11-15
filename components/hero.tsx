'use client'

import Image from 'next/image'
import SvgComponent from '@/components/svg-component'
import Link from 'next/link'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

const Hero = () => {
  return (
    <main
      className={
        'w-full mx-auto flex flex-col justify-center md:flex-row  md:justify-around items-center py-16'
      }
    >
      <div className={'flex flex-col items-center md:items-start space-y-4'}>
        <p>
          你好，我是<span className={'text-5xl font-bold'}>Yuan Li</span>
          （鸢离）
        </p>
        <p>一名全栈开发工程师，但是我专注于前端开发。</p>
        <div className={'flex justify-start items-center space-x-4'}>
          <Link href={'https://github.com/imyuanli'}>
            <SvgComponent slug={'github'} />
          </Link>
          <Link href={'mailto:imyuanli@qq.com'}>
            <SvgComponent slug={'gmail'} />
          </Link>
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
      </div>
      <Image
        className={'rounded-md mt-8 md:mt-0'}
        src={'/code.png'}
        alt={'code info'}
        height={300}
        width={480}
      />
    </main>
  )
}

export default Hero
