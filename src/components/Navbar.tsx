import Image from 'next/image'
import Link from 'next/link'
import Iso from '../../public/iso.svg'

export default function Navbar(): JSX.Element {
  const links = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Mentors',
      href: '/mentors'
    },
    {
      name: 'Log In',
      href: '/login'
    }
  ]

  return (
    <header className='flex items-center justify-between mb-4'>
      <figure>
        <Image width={50} height={50} src={Iso} alt='Logo' />
      </figure>
      <button className='h-[25px] w-[25px] bg-transparent flex flex-col justify-between tablet:hidden'>
        <div className='bg-[#232323] w-full h-[15%] rounded-lg'></div>
        <div className='bg-[#232323] w-full h-[15%] rounded-lg'></div>
        <div className='bg-[#232323] w-full h-[15%] rounded-lg'></div>
      </button>
      <nav className='hidden tablet:block'>
        <ul className='flex gap-4'>
          {links.map(link => (
            <li key={`${link.name}-li`}>
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
