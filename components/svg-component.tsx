import Image from 'next/image'

const SvgComponent = ({ slug }: any) => {
  return (
    <Image
      className={'cursor-pointer'}
      src={`https://cdn.simpleicons.org/${slug}`}
      alt={slug}
      width={24}
      height={24}
    />
  )
}

export default SvgComponent
