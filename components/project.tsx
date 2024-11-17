'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ProjectList from '@/components/project-list'
import { company_project, personal_project } from '@/lib/constant'
import { useGenerateRandomColor } from '@/lib/hooks'

const Project = () => {
  const color = useGenerateRandomColor()

  return (
    <section
      id={'project'}
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
        <div
          className={
            'flex flex-col justify-center items-center md:flex-row md:justify-between md:items-end py-4 md:py-8'
          }
        >
          <div
            data-aos="fade-right"
            className={
              'text-2xl font-semibold text-white text-center mb-4 md:text-left md:text-3xl md:mb-0'
            }
          >
            看看我做过 de <span className={'text-4xl md:text-5xl'}>项目</span>
          </div>
          <div data-aos="fade-left" className={'w-full md:w-fit'}>
            <TabsList className={'w-full'}>
              <TabsTrigger className={'w-full'} value="personal">
                个人开源项目
              </TabsTrigger>
              <TabsTrigger className={'w-full'} value="company">
                公司项目
              </TabsTrigger>
            </TabsList>
          </div>
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
