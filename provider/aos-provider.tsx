'use client'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const AosProvider = ({ children }: any) => {
  useEffect(() => {
    AOS.init({
      duration: 300,
    })
  }, [])

  return <div>{children}</div>
}

export default AosProvider
