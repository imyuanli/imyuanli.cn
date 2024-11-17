import { Button } from '@/components/ui/button'

const AdaptiveBtn = ({ variant, children }: any) => {
  return (
    <>
      <Button
        size={'sm'}
        className={'block md:hidden'}
        variant={variant || 'ghost'}
      >
        {children}
      </Button>
      <Button className={'hidden md:block'} variant={variant || 'ghost'}>
        {children}
      </Button>
    </>
  )
}

export default AdaptiveBtn
