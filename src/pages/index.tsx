import Link from 'next/link'
import Image from 'next/image'
import logoImg from '../assets/logo.png'

export default function Home() {

  return (
    <div className="grid grid-cols-6 gap-4 items-center">

      <div className='col-start-3 col-end-5 mt-28 items-center'>
        <Image 
          src={logoImg} 
          alt="Logo" 
          quality={100}
          width={800}
          height={800}
        />
      </div>

      <div className='col-start-2 col-end-6 mr-14 ml-14 mt-8'>
        <h1 className="mb-8 ml-24 mr-24 text-white text-center text-4xl font-bold leading-tight">
          Insira suas preferências e te indicaremos algo legal para assistir!
        </h1>
      </div>

      <div className='col-start-3 col-end-5 mt-2'>
        <Link href="/preferences"><button 
              className="animate-pulse w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-orange-500 rounded-lg focus:shadow-outline hover:bg-indigo-800 "
              type="submit"
            >
              Começar
          </button>
        </Link>
      </div>

    </div>
  )
}