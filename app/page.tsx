import Hero from '@/components/hero'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ProjectList from '@/components/project-list'
import { company_project, personal_project } from '@/lib/constant'

export default function Home() {
  return (
    <div className={'w-full min-h-screen flex justify-center items-center p-8'}>
      <div className={'max-w-5xl w-full flex flex-col space-y-12'}>
        <Hero />
        <Tabs defaultValue="personal" className={'w-full'}>
          <TabsList>
            <TabsTrigger value="personal">个人开源项目</TabsTrigger>
            <TabsTrigger value="company">公司项目</TabsTrigger>
          </TabsList>
          <TabsContent value="personal">
            <ProjectList projects={personal_project} />
          </TabsContent>
          <TabsContent value="company">
            <ProjectList projects={company_project} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
