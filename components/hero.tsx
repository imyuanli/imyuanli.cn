'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import Socialize from '@/components/socialize'

const Hero = () => {
  return (
    <section
      id={'#'}
      className="min-h-screen w-full overflow-x-hidden py-24 flex justify-around items-center flex-col relative"
    >
      {/*背景*/}
      <BackgroundItem
        className={
          'w-72 h-72 -right-36 md:w-96 md:h-96 md:-right-48 top-12 bg-[#eaf1fa]'
        }
      />
      <BackgroundItem
        className={
          'w-56 h-56 -left-28  md:w-80 md:h-80 md:-left-40 top-24 bg-[#f2eafa]'
        }
      />
      <BackgroundItem
        className={
          'w-20 h-20 left-24 top-12 md:w-24 md:h-24 md:left-1/3 md:top-1/4  bg-[#faf9ea]'
        }
      />
      <BackgroundItem
        className={
          'w-24 h-24 left-12 bottom-1/4 -translate-y-1/2 md:w-36 md:h-36 md:left-36 bg-[#eafaf2]'
        }
      />
      <BackgroundItem
        className={
          'left-1/2 top-1/2 w-36 h-36 md:w-60 md:h-60 border-[20px] border-[#faeaea]'
        }
      />
      <BackgroundItem
        className={
          'bottom-8 right-16 md:bottom-24 md:right-32 w-24 h-24 border-[18px] border-[#faf3ea]'
        }
      />
      <div
        className={
          'container flex flex-col md:flex-row justify-between items-center'
        }
      >
        <div
          data-aos="fade-down-right"
          className={'flex flex-col items-center md:items-start space-y-4'}
        >
          <p>
            我是<span className={'text-5xl font-bold'}>Yuan Li</span>
            （鸢离）
          </p>
          <p className={'text-center md:text-left'}>
            一名全栈开发工程师，但是我更专注于前端开发。
          </p>
          <Socialize />
        </div>
        <Image
          data-aos="fade-down-left"
          className={'rounded-md mt-8 md:mt-0'}
          src={'/code.png'}
          alt={'code info'}
          height={300}
          width={480}
        />
      </div>
    </section>
  )
}

const BackgroundItem = ({ className }: any) => {
  return (
    <div
      data-aos="flip-up"
      className={cn('absolute -z-20 rounded-full', className)}
    />
  )
}

export default Hero
