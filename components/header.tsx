'use client';

import Link from "next/link";
import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
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
        <div className={'py-8 px-4 flex justify-end items-center md:justify-center'}>
            <div className={'hidden md:block space-x-4 border rounded-full shadow-md px-8 py-1'}>
                {routes.map((route, index) => (
                    <Link href={route.path} key={index}>
                        <Button variant={route.path === pathname?'secondary':'ghost'}>{route.name}</Button>
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
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                            <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

            </div>
        </div>
    );
}


export default Header