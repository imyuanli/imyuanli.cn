'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const getStatus = (status: string) => {
  switch (status) {
    case 'ARCHIVE':
      return {
        variant: 'secondary',
        text: '不再维护',
      }
    case 'DEV':
      return {
        variant: 'outline',
        text: '开发中',
      }
    case 'Upgrading':
      return {
        variant: 'default',
        text: '升级中',
      }
    case 'FAILED':
      return {
        variant: 'destructive',
        text: '已废弃',
      }
    default:
      return {
        variant: 'default',
        text: '未知',
      }
  }
}

const ProjectList = ({ projects }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects?.map((item: any, index: number) => {
        const { variant, text }: any = getStatus(item.status)
        return (
          <Card
            data-aos="fade-up"
            className={
              'group bg-transparent bg-gradient-to-br from-white/95 from-30% to-white/70 to-75% flex flex-col justify-between'
            }
            key={index}
          >
            <CardHeader
              className={'flex flex-row justify-between items-center'}
            >
              <div className={'flex justify-start items-center space-x-2'}>
                <Avatar>
                  <AvatarImage src={`/logo/${item.slug}.png`} />
                  <AvatarFallback>
                    <div
                      style={{
                        fontSize: 24,
                        background: 'black',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        borderRadius: '25%',
                      }}
                    >
                      {item.name.substring(0, 1)}
                    </div>
                  </AvatarFallback>
                </Avatar>
                <CardTitle>{item.name}</CardTitle>
              </div>
              {item.status && <Badge variant={variant}>{text}</Badge>}
            </CardHeader>
            <CardContent>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
            <CardFooter className={'flex justify-between items-center'}>
              <Image
                className={'rounded-full'}
                src={`/framework/${item.poweredBy}.svg`}
                alt={item.poweredBy}
                width={24}
                height={24}
              />
              {item?.slug && (
                <div className={'flex justify-center items-center'}>
                  <Link
                    href={`https://github.com/imyuanli/${item.slug}`}
                    target={'_blank'}
                  >
                    <Button className={'flex'} size={'icon'} variant={'ghost'}>
                      <Github />
                    </Button>
                  </Link>
                  <Link href={item?.link} target={'_blank'}>
                    <Button className={'flex'} size={'icon'} variant={'ghost'}>
                      <ExternalLink />
                    </Button>
                  </Link>
                </div>
              )}
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}

export default ProjectList
