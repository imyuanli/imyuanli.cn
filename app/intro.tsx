'use client';

import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {Contact, Github, Lightbulb} from "lucide-react";

const Intro = () => {

    return (
        <div className="min-h-screen w-full overflow-x-hidden py-24 flex justify-evenly items-center flex-col relative">
            {/*背景*/}
            <BackgroundItem className={'top-12 -right-32 w-64 h-64 bg-[#eaf1fa]'}/>
            <BackgroundItem className={'top-64 -left-24 w-48 h-48 bg-[#f2eafa]'}/>
            <BackgroundItem className={'top-1/4 left-1/3 w-24 h-24 bg-[#faf9ea]'}/>
            <BackgroundItem className={'left-1/4 top-3/4 -translate-y-1/2 w-24 h-24 bg-[#eafaf2]'}/>
            <BackgroundItem className={'left-1/2 top-1/2 -translate-y-1/2 w-48 h-48 border-[24px] border-[#faeaea]'}/>
            <BackgroundItem className={'bottom-24 right-32  w-24 h-24 border-[24px] border-[#faf3ea]'}/>
            <div className={'container flex justify-center items-center flex-col space-y-4'}>
                <div className={'text-3xl md:text-4xl 2xl:text-6xl text-base-2 font-bold'}>鸢离</div>
                <div className={'text-base text-zinc-600'}>一名前端开发工程师</div>
                <div className={'space-x-4'}>
                    <Button variant={'outline'}>
                        <Lightbulb size={20} className={'mr-2'} /> 关于
                    </Button>
                    <Button variant={'outline'}>
                        <Contact size={20} className={'mr-2'}/> 联系
                    </Button>
                    <Button variant={'outline'}>
                        <Github size={20} className={'mr-2'}/> Github
                    </Button>
                </div>
            </div>
        </div>
    );
}

const BackgroundItem = ({className}: any) => {
    return (
        <div data-aos="flip-up" className={cn("absolute -z-20 rounded-full", className)}/>
    )
}


export default Intro