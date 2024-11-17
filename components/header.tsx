'use client'

import Link from 'next/link'
import AdaptiveBtn from '@/components/adaptive-btn'
import BackToTop from '@/components/back-to-top'

const anchor = [
  {
    name: '作品',
    href: '#project',
  },
]

const Header = () => {
  const handleClick = (href: string) => {
    const id = href.replace('#', '')
    const element: any = document.getElementById(id)
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    })
  }

  return (
    <div className={'fixed top-4 z-10 flex justify-center items-center'}>
      <div
        className={
          'border rounded-full shadow-md bg-white/95 backdrop-blur-sm px-8 py-2'
        }
      >
        <div className={'flex space-x-1'}>
          {anchor.map((route, index) => (
            <div
              key={index}
              onClick={() => {
                handleClick(route.href)
              }}
            >
              <AdaptiveBtn>{route.name}</AdaptiveBtn>
            </div>
          ))}
          <Link href={'https://github.com/imyuanli'} target={'_blank'}>
            <AdaptiveBtn>Github</AdaptiveBtn>
          </Link>
          <BackToTop />
        </div>
      </div>
    </div>
  )
}

export default Header
