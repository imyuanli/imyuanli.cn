'use client';

import Image from "next/image";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {useEffect, useRef} from "react";
import {Github} from "lucide-react";

const Intro = () => {

    return (
        <div className="min-h-screen w-full overflow-x-hidden py-24 flex justify-evenly items-center flex-col relative">
            {/*背景*/}
            <BackgroundItem className={'top-12 -right-32 w-64 h-64 bg-[#faf3ea]'}/>
            <BackgroundItem className={'top-64 -left-24 w-48 h-48 bg-[#f2eafa]'}/>
            <BackgroundItem className={'top-1/4 left-1/3 w-24 h-24 bg-[#faf9ea]'}/>
            <BackgroundItem className={'bottom-24 right-32 w-24 h-24 bg-[#faeaea]'}/>
            <BackgroundItem className={'left-1/2 top-1/2 -translate-y-1/2 w-48 h-48 border-[24px] border-[#eafaf2]'}/>
            <BackgroundItem className={'left-1/4 top-3/4 -translate-y-1/2 w-24 h-24 border-[24px] border-[#eaf1fa]'}/>

            <div className={'container flex justify-center items-center flex-col space-y-4'}>
                <Image
                    src="/hand.png"
                    width={80}
                    height={160}
                    alt="Yuanli"
                    className={'h-full mr-2 animate-wave'}
                />
                <div className={'text-3xl md:text-4xl 2xl:text-6xl text-base-2 font-bold'}>鸢离</div>
                <div className={'text-base text-zinc-600'}>一名前端开发工程师</div>
                <div className={'space-x-4'}>
                    <Button>
                        关于我更多 →
                    </Button>
                    <Button variant={'outline'}>
                        Github →
                    </Button>
                </div>
                {/*<div className={'flex justify-center items-center space-x-4'}>*/}
                {/*    <Button variant={'ghost'} size={'icon'}>*/}
                {/*        <Github/>*/}
                {/*    </Button>*/}
                {/*    <Button variant={'ghost'} size={'icon'}>*/}
                {/*        邮箱*/}
                {/*    </Button>*/}
                {/*    <Button variant={'ghost'} size={'icon'}>*/}
                {/*        微信*/}
                {/*    </Button>*/}
                {/*</div>*/}
            </div>

            {/*<div className={'container flex justify-around items-center'}>*/}
            {/*    <div data-aos="fade-up" className={'space-y-2'}>*/}
            {/*        <div className={'flex items-end'}>*/}
            {/*            <Image*/}
            {/*                src="/hand.png"*/}
            {/*                width={40}*/}
            {/*                height={40}*/}
            {/*                alt="Yuanli"*/}
            {/*                className={'h-full mr-2 animate-wave'}*/}
            {/*            />*/}
            {/*            <div className={'text-base text-zinc-600'}>你好，我是</div>*/}
            {/*        </div>*/}
            {/*        <div className={''}>*/}
            {/*            YUAN LI (鸢离)*/}
            {/*        </div>*/}
            {/*        <div className={'max-w-2xl text-base text-zinc-600'}>*/}
            {/*            一名前端开发工程师*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={'w-[600px] h-[300px] bg-[#000000d9] p-4 rounded-lg'}>*/}
            {/*        <Image*/}
            {/*            src={'/img_1.png'}*/}
            {/*            width={40}*/}
            {/*            height={20}*/}
            {/*            alt={'鸢离'}*/}
            {/*        />*/}
            {/*        <div className={'text-[#f0f0f0] mt-2 flex'}>*/}
            {/*            <div className={'mr-2'}>$</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

const BackgroundItem = ({className}: any) => {
    return (
        <div data-aos="flip-up" className={cn("absolute -z-20 rounded-full", className)}/>
    )
}


export default Intro