'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ProjectList from '@/components/project-list'
import { company_project, personal_project } from '@/lib/constant'
import { useGenerateRandomColor } from '@/lib/hooks'

const Project = () => {
  const color = useGenerateRandomColor()

  return (
    <section
      className="min-h-screen w-full border-none"
      style={{
        backgroundImage: `url(/project-bg.png),${color}`,
      }}
    >
      <div
        className={'bg-white w-full h-20 md:h-40'}
        style={{ clipPath: 'polygon(0 -1px, 100% -1px, 20% 80%)' }}
      />
      <Tabs defaultValue="personal" className="container">
        <div className={'flex justify-between items-end py-4 md:py-8'}>
          <div className={'flex justify-center md:justify-between items-end'}>
            <div
              data-aos="fade-right"
              className={'font-semibold text-white text-center md:text-left'}
            >
              <p className={'text-2xl md:text-3xl mb-4'}>看看我做过</p>
              <p className={'text-4xl md:text-5xl'}>什么项目</p>
            </div>
            {/*<div data-aos="fade-left" className={'hidden md:block'}>*/}
            {/*    <Link href={''}>*/}
            {/*        <Button variant={'outline'} className={'w-full px-12 py-6'}>*/}
            {/*            <span className={'mr-2 text-lg'}>查看全部</span> <ArrowRight/>*/}
            {/*        </Button>*/}
            {/*    </Link>*/}
            {/*</div>*/}
          </div>
          <TabsList>
            <TabsTrigger value="personal">个人开源项目</TabsTrigger>
            <TabsTrigger value="company">公司项目</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="personal">
          <ProjectList projects={personal_project} />
        </TabsContent>
        <TabsContent value="company">
          <ProjectList projects={company_project} />
        </TabsContent>
      </Tabs>
      <div
        className={'bg-white w-full h-20 md:h-40'}
        style={{ clipPath: 'polygon(0 0, 80% 80%, 100% 0,100% 100%,0 100%)' }}
      />
    </section>
  )
}

export default Project
