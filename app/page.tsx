import Hero from '@/components/hero'
import Project from '@/components/project'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div
      className={
        'w-full min-h-screen flex flex-col justify-center items-center'
      }
    >
      <Header />
      <Hero />
      <Project />
      <Footer />
    </div>
  )
}
