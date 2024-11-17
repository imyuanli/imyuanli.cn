'use client'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import AdaptiveBtn from '@/components/adaptive-btn'

const BackToTop = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    addEventListener('scroll', () => {
      setShow(window.scrollY >= 300)
    })
    return () => {
      removeEventListener('scroll', () => {})
    }
  })

  return (
    show && (
      <div
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }}
      >
        <AdaptiveBtn>
          <ArrowUp size={20} />
        </AdaptiveBtn>
      </div>
    )
  )
}

export default BackToTop
