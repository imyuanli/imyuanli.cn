'use client';

import Image from "next/image";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Github} from "lucide-react";
import Link from "next/link";

const Project = () => {

    const projects = [
        {
            id: 1,
            title: 'First Project',
            description: 'This is my first project',
            icon: '/vercel.svg',
            url: 'https://vercel.com',
            poweredBy: 'Next.js',
            status: 'completed',
            version: '1.0.0',
            github: 'https://github.com',
        },
        {
            id: 2,
            title: 'Second Project',
            description: 'This is my second project',
            icon: '/vercel.svg',
            url: 'https://vercel.com',
            poweredBy: 'Next.js',
            status: 'completed',
            version: '1.0.0',
            github: 'https://github.com',
        },
        {
            id: 3,
            title: 'Third Project',
            description: 'This is my third project',
            icon: '/vercel.svg',
            url: 'https://vercel.com',
            poweredBy: 'Next.js',
            status: 'completed',
            version: '1.0.0',
            github: 'https://github.com',
        },
        {
            id: 3,
            title: 'Third Project',
            description: 'This is my third project',
            icon: '/vercel.svg',
            url: 'https://vercel.com',
            poweredBy: 'Next.js',
            status: 'completed',
            version: '1.0.0',
            github: 'https://github.com',
        }
    ]

    return (
        <div className="min-h-screen w-full project-bg my-8">
            <div className={'bg-white w-full h-20 md:h-40'} style={{clipPath: "polygon(0 0, 100% 0, 20% 80%)"}}/>
            <div className={'container py-8 md:py-12 space-y-8'}>
                <div data-aos="fade-up" className={'flex justify-center md:justify-between items-center'}>
                    <p className={'font-semibold text-white text-4xl md:text-6xl'}>
                        热门项目
                    </p>
                    <Button className={'block md:hidden'}>
                        查看全部
                    </Button>
                </div>
                <div className={'grid grid-cols-1 md:grid-cols-2 gap-8'} >
                    {projects.map((p, index) => (
                        <Link href={p.url} data-aos="zoom-in-up">
                            <Card
                                className={'relative col-span-1 bg-transparent bg-gradient-to-b from-white/95 from-20% to-white/60 to-45%'}>
                                <CardHeader>
                                    <div className={'flex justify-between items-center'}>
                                        <div>
                                            <CardTitle>{p.title}</CardTitle>
                                            <CardDescription>{p.description}</CardDescription>
                                        </div>
                                        <Image
                                            src={p.icon}
                                            height={64}
                                            width={64}
                                            alt={p.title}
                                        />
                                    </div>
                                    <div className={'space-x-4'}>
                                        <Badge variant={'secondary'}>
                                            网页应用
                                        </Badge>
                                        <Badge variant={'secondary'}>
                                            网页应用
                                        </Badge>
                                        <Badge variant={'secondary'}>
                                            网页应用
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className={'p-24 relative min-h-[240px]'}>
                                        <Image
                                            className={'rounded-xl shadow-md'}
                                            src={'/img.png'}
                                            alt={'xxx'}
                                            fill={true}
                                            objectFit={'cover'}
                                        />
                                    </div>
                                </CardContent>
                                <CardFooter className={'flex justify-between items-center'}>
                                    <div className={'flex space-x-4'}>
                                        <div>
                                            <p className={'text-sm font-medium'}>状态</p>
                                            <p className={'text-xs text-gray-500'}>RUNNING</p>
                                        </div>
                                        <div>
                                            <p className={'text-sm font-medium'}>框架</p>
                                            <p className={'text-xs text-gray-500'}>NEXT.js</p>
                                        </div>
                                        <div>
                                            <p className={'text-sm font-medium'}>Stars</p>
                                            <p className={'text-xs text-gray-500'}>{123}</p>
                                        </div>
                                    </div>
                                    <Link href={p.github}>
                                        <Button size={'icon'} variant={'ghost'}>
                                            <Github/>
                                        </Button>
                                    </Link>
                                </CardFooter>
                                {/*<div className={'absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-sky-500 to-green-500'} />*/}
                            </Card>
                        </Link>
                    ))}
                </div>
                <Button className={'hidden md:block w-full'}>
                    查看全部
                </Button>
            </div>
            <div className={'bg-white w-full h-20 md:h-40'}
                 style={{clipPath: "polygon(0 0, 80% 80%, 100% 0,100% 100%,0 100%)"}}/>
        </div>
    );
}

export default Project