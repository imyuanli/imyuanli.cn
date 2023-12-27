'use client';

import {BookOpenText} from "lucide-react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";

const Blog = () => {
    const blog = [
        {
            id: 3,
            title: 'Third Blog',
            content: 'This is my thirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthird blog',
            date: '2021-10-10',
            tags: ['tag1', 'tag2']
        },
        {
            id: 1,
            title: 'First Blog',
            content: 'This is my first blogThis is my firstfirstfirstfirstfirstfirstfirstfirstfirst blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blog',
            date: '2021-10-10',
            tags: ['tag1', 'tag2']
        },
        {
            id: 1,
            title: 'First Blog',
            content: 'This is my first blogThis is my firstfirstfirstfirstfirstfirstfirstfirstfirst blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blog',
            date: '2021-10-10',
            tags: ['tag1', 'tag2']
        },
        {
            id: 1,
            title: 'First Blog',
            content: 'This is my first blogThis is my firstfirstfirstfirstfirstfirstfirstfirstfirst blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blog',
            date: '2021-10-10',
            tags: ['tag1', 'tag2']
        },
        {
            id: 1,
            title: 'First Blog',
            content: 'This is my first blogThis is my firstfirstfirstfirstfirstfirstfirstfirstfirst blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blog',
            date: '2021-10-10',
            tags: ['tag1', 'tag2']
        },
        {
            id: 1,
            title: 'First Blog',
            content: 'This is my first blogThis is my firstfirstfirstfirstfirstfirstfirstfirstfirst blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blog',
            date: '2021-10-10',
            tags: ['tag1', 'tag2']
        },
        {
            id: 2,
            title: 'Second Blog',
            content: 'ThisThisThisThisThisThisThisThisThisThisThisThisThisThis is my second blog',
            date: '2021-10-10',
            tags: ['tag1', 'tag2']
        },
        {
            id: 3,
            title: 'Third Blog',
            content: 'This is my thirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthird blog',
            date: '2021-10-10',
            tags: ['tag1', 'tag2']
        },
        {
            id: 2,
            title: 'Second Blog',
            content: 'ThisThisThisThisThisThisThisThisThisThisThisThisThisThis is my second blog',
            date: '2021-10-10',
            tags: ['tag1', 'tag2']
        },
        {
            id: 1,
            title: 'First Blog',
            content: 'This is my first blogThis is my firstfirstfirstfirstfirstfirstfirstfirstfirst blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blog',
            date: '2021-10-10',
            tags: ['tag1', 'tag2']
        },
        {
            id: 1,
            title: 'First Blog',
            content: 'This is my first blogThis is my firstfirstfirstfirstfirstfirstfirstfirstfirst blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blog',
            date: '2021-10-10',
            tags: ['tag1', 'tag2']
        },
        {
            id: 1,
            title: 'First Blog',
            content: 'This is my first blogThis is my firstfirstfirstfirstfirstfirstfirstfirstfirst blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blog',
            date: '2021-10-10',
            tags: ['tag1', 'tag2']
        },
        {
            id: 1,
            title: 'First Blog',
            content: 'This is my first blogThis is my firstfirstfirstfirstfirstfirstfirstfirstfirst blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blogThis is my first blog',
            date: '2021-10-10',
            tags: ['tag1', 'tag2']
        },
        {
            id: 3,
            title: 'Third Blog',
            content: 'This is my thirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthird blog',
            date: '2021-10-10',
            tags: ['tag1', 'tag2']
        },
        {
            id: 3,
            title: 'Third Blog',
            content: 'This is my thirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthird blog',
            date: '2021-10-10',
            tags: ['tag1', 'tag2']
        },
        {
            id: 3,
            title: 'Third Blog',
            content: 'This is my thirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthird blog',
            date: '2021-10-10',
            tags: ['tag1', 'tag2']
        },
        {
            id: 3,
            title: 'Third Blog',
            content: 'This is my thirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthird blog',
            date: '2021-10-10',
            tags: ['tag1', 'tag2']
        },

    ]
    return (
        <div className={'container px-1px'}>
            <div>
                <h1 className={'text-3xl font-bold'}>近期博客</h1>
                <div className={'columns-1 md:columns-2 xl:columns-4 gap4'}>
                    {blog.map((b) => (
                        <Card data-aos={'zoom-in-down'} className={'mb-4 break-inside-avoid-column'}>
                            <CardHeader>
                                <CardTitle>{b.title}</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className={'break-words'}>{b.content}</p>
                            </CardContent>
                            <CardFooter>
                                <p>Card Footer</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default Blog