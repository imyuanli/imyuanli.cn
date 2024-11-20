import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const Contact = () => {
  return (
    <div id={'contact'} className="container grid grid-cols-2 gap-4 py-12">
      <div className={'flex flex-col justify-center items-start space-y-4'}>
        <p className="text-4xl md:text-6xl font-semibold">你有好的想法吗？</p>
        <p className="text-4xl md:text-6xl font-semibold">
          让我们
          <span
            className={
              'bg-gradient-to-r from-teal-500 to-[rgba(96,165,250,1)] text-transparent bg-clip-text'
            }
          >
            一起合作
          </span>
        </p>
        <p className="text-2xl md:text-3xl font-normal my-5 text-base-2">
          imyuanli.cn@qq.com
        </p>
        <div>
          <Button>取得联系</Button>
        </div>
      </div>
      <div className={'flex flex-col justify-center items-start space-y-4'}>
        <Input />
        <Input />
        <Textarea />
        <Button>发送</Button>
      </div>
    </div>
  )
}

export default Contact
