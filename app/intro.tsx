'use client';

import Image from "next/image";
import {Button} from "@/components/ui/button";

const Intro = () => {
    return (
        <div className="min-h-screen w-full py-24 flex justify-evenly items-center flex-col">
            <div
                data-aos="fade-up"
                className={'flex items-center justify-between container flex-col space-y-8'}
            >
                <div className={'h-full'}>
                    <Image
                        src="/hand.png"
                        width={80}
                        height={160}
                        alt="Yuanli"
                        className={'h-full'}
                    />
                </div>
                <div className={'text-3xl md:text-4xl 2xl:text-6xl text-base-2 font-semibold'}>Hi,我是鸢离</div>
                <div className={'max-w-2xl text-base text-zinc-600'}>
                    我是一名前端开发工程师，react框架使用者
                </div>
                <div className={'space-x-4'}>
                    <Button>
                        有合作机会
                    </Button>
                    <Button variant={'outline'}>
                        查看简历
                    </Button>
                </div>
            </div>
        </div>
    );
}


export default Intro