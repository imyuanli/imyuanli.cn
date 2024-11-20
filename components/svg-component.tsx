import Image from 'next/image'

const SvgComponent = ({ slug }: any) => {
  return (
    <Image
      className={'cursor-pointer'}
      src={`/social-icons/${slug}.svg`}
      alt={slug}
      width={24}
      height={24}
    />
  )
}

export default SvgComponent
