import Hero from '@/components/hero'
import Project from '@/components/project'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className={'w-full min-h-screen flex justify-center items-center'}>
      <div className={'w-full flex flex-col space-y-16'}>
        <Hero />
        <Project />
        <Footer />
      </div>
    </div>
  )
}
