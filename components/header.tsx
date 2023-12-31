'use client';

import Link from "next/link";
import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Menu} from "lucide-react";

const routes = [
    {
        name: '首页',
        path: '/'
    },
    {
        name: '博客',
        path: '/about'
    },
    {
        name: '作品',
        path: '/projects'
    },
    {
        name: '笔记',
        path: '/notes'
    },
    {
        name: '关于',
        path: '/about'
    },
    {
        name: '联系',
        path: '/contact'
    }
]

const Header = () => {
    const pathname = usePathname()

    return (
        <div className={'fixed top-4 z-10 w-full flex justify-end md:justify-center items-center px-4'}>
            <div className={'hidden md:block space-x-4 border rounded-full shadow-md px-8 py-2 bg-white/90 backdrop-blur-sm'}>
                {routes.map((route, index) => (
                    <Link href={route.path} key={index}>
                        <Button variant={route.path === pathname ? 'secondary' : 'ghost'}>{route.name}</Button>
                    </Link>
                ))}
            </div>
            <div className={'block md:hidden'}>
                <Sheet>
                    <SheetTrigger>
                        <Button size={"icon"} variant={'outline'}>
                            <Menu/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side={'top'}>
                        <div className={'mt-4 flex flex-col justify-center items-center space-y-1'}>
                            {routes.map((route, index) => (
                                <Link className={'w-full'} href={route.path} key={index}>
                                    <Button className={'w-full'}
                                            variant={route.path === pathname ? 'secondary' : 'ghost'}>{route.name}</Button>
                                </Link>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}


export default Header