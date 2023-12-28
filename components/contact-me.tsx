'use client';

import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import * as z from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input";
import {Mail} from "lucide-react";
import {toast} from "@/components/ui/use-toast";

const ContactMe = () => {
    const FormSchema = z.object({
        email: z.string().email({
            message: "Please enter a valid email address.",
        }),
        username: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
        message: z.string().min(10, {
            message: "Message must be at least 10 characters.",
        }),
    })

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast("You submitted the following values:", {
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
            ),
        })
    }

    return (
        <div className={'container py-48 flex justify-center items-center flex-col w-full h-full'}>
            <div className={'flex flex-col justify-center items-center space-y-4 mb-8'}>
                <div className={'text-3xl font-semibold'}>联系我</div>
                <div className={'text-lg text-zinc-600'}>
                    想要一起合作？或者只是想聊聊天？还是网站有什么问题？都可以联系我！
                </div>
            </div>
            <div className={'w-full h-full flex justify-center items-center'}>
                <div className={"p-24 h-96 rounded-md shadow-md relative flex flex-col justify-center items-center space-y-4 bg-contain bg-top bg-no-repeat"}
                style={{
                    backgroundImage: `url('/bg.png')`
                }}
                >
                    <div className={'text-2xl font-semibold'}>
                       还有其他方式 ！！！
                    </div>
                    <div className={'flex space-x-4'}>
                        <Button className={'w-full'}>
                            <Mail size={20} className={'mr-2'}/> 邮箱
                        </Button>
                        <Button variant={'outline'}>
                            微信
                        </Button>
                        <Button variant={'outline'}>
                            QQ
                        </Button>
                    </div>
                </div>
                <div className={'w-full rounded-md p-8 border shadow-md relative bg-white'}>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className={'grid grid-cols-2 gap-4'}>
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem className={'col-span-1'}>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="example@xx" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                This is your public display name.
                                            </FormDescription>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem className={'col-span-1'}>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="example@xx" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                This is your public display name.
                                            </FormDescription>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({field}) => (
                                        <FormItem className={'col-span-2'}>
                                            <FormLabel>Username</FormLabel>
                                            <FormControl>
                                                <Input placeholder="shadcn" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                This is your public display name.
                                            </FormDescription>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({field}) => (
                                        <FormItem className={'col-span-2'}>
                                            <FormLabel>Username</FormLabel>
                                            <FormControl>
                                                <Input placeholder="shadcn" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                This is your public display name.
                                            </FormDescription>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </form>
                        <div className={'w-full flex justify-end'}>
                            <Button type="submit">提交</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}


export default ContactMe