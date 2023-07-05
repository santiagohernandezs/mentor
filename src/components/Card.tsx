import Link from 'next/link'
type CardProps = {
  name: string
  img: string
  url: string
}

export default function Card({ name, img, url }: CardProps): JSX.Element {
  return (
    <Link
      href={url}
      className='flex h-20 w-full p-[10px] justify-between items-center rounded-lg gap-[10px] bg-[#e0e0e0]'>
      <img src={img} alt='' className='rounded-full h-full w-16' />

      <div className='flex flex-col gap-[5px] w-3/4 h-full'>
        <div className='w-full h-full'>
          <span>{name}</span>
        </div>
        <div className='w-full h-full bg-[#9e9e9e] hidden tablet:block'></div>
      </div>
    </Link>
  )
}
