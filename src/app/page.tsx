import { Cards, Container } from '@/components'
import Image from 'next/image'
import Search from '../../public/search.svg'

export default function Home() {
  return (
    <main>
      <Container
        align='center'
        bg='purple/secondary'
        direction='col'
        justify='center'
        gap={4}>
        <div className='flex flex-col'>
          <h1 className='font-extrabold text-center text-3xl text-black/primary'>
            Find your guide
          </h1>
          <h2 className='font-semibold text-center text-m text-black/primary'>
            Lorem ipsum dolor sit amet.
          </h2>
        </div>
        <button
          type='button'
          className='flex bg-white/primary p-2 w-3/4 text-sm text-black/primary items-center rounded-lg'>
          <Image width={15} height={15} src={Search} alt='search' className='mr-3' />
          Quick search...
        </button>
      </Container>
      <span className='text-center text-black/primary w-full block my-4'>
        Lorem ipsum dolor sit amet consec adipisicing elit.
      </span>
      <Cards />
    </main>
  )
}
