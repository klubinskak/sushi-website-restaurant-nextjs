import Image from 'next/image'

interface Props {
    image_url: string,
    name: string
}

function OptimizedImage({image_url, name}: Props) {
  return (
    <>
      <Image
      priority
        src={image_url}
        alt={name}
        width={600}
        height={400}
        className="w-[600px] h-[400px]"
        blurDataURL="URL"
        placeholder="blur"
      />
    </>
  )
}
export default OptimizedImage