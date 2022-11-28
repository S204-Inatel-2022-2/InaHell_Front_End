import Image from 'next/image'
import appPreviewImg from '../../assets/claquete.png'
import { FormEvent, useState } from 'react'

import action from '../../assets/action.png'
import comedy from '../../assets/comedy.png'
import drama from '../../assets/drama.png'
import fiction from '../../assets/fiction.png'
import horror from '../../assets/horror.png'
import romance from '../../assets/romance.png'

import ButtonPrevious from '../../components/ButtonPrevious';
import ButtonNext from '../../components/ButtonNext';
import Title from '../../components/Title';
import ToggleSwitch from '../../components/Toggle/toggleSwitch'


export default function Genre() {

  const [genre, setPreferences] = useState('')
  const [movie, setMovie] = useState('')


  async function SetGenre(event: FormEvent) {
    event.preventDefault()

    console.log(genre)
  }

  return (
    <div className="grid grid-cols-6 gap-4">

      <div className='ml-6 mt-10'>
        <Title></Title>

        <div className='ml-16 mt-44'>
          <ButtonPrevious path="/">
            <p className='text-white ml-3'>Voltar</p>
          </ButtonPrevious>
        </div>
      </div>

      <div className="col-start-2 col-end-6 mr-14 ml-14 mt-20">

        <h1 className="mt-0 text-white text-4xl font-bold leading-tight">
          Gênero que mais gostaria de assistir
        </h1>

        <div className="ml-10 mt-8 grid grid-cols-3 gap-4">
          <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <Image 
              src={action} 
              alt="" 
              quality={100}
              width={200}
              height={200}
            />
            <p className='text-white text-center mr-10'>Ação</p>
          </div>

          <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <Image 
              src={comedy} 
              alt="" 
              quality={100}
              width={200}
              height={200}
            />
            <p className='text-white text-center mr-10'>Comédia</p>
          </div>

          <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <Image 
              src={drama} 
              alt="" 
              quality={100}
              width={200}
              height={200}
            />
            <p className='text-white text-center mr-10'>Drama</p>
          </div>

          <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <Image 
              src={fiction} 
              alt="" 
              quality={100}
              width={200}
              height={200}
            />
            <p className='text-white text-center mr-10'>Ficção</p>
          </div>

          <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <Image 
              src={horror} 
              alt="" 
              quality={100}
              width={200}
              height={200}
            />
            <p className='text-white text-center mr-10'>Terror</p>
          </div>

          <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <Image 
              src={romance} 
              alt="" 
              quality={100}
              width={200}
              height={200}
            />
            <p className='text-white text-center mr-10'>Romance</p>
          </div>
          
        </div>

        <div className='mt-12 text-white'>
          <h1 className="text-white text-2xl leading-tight">
            Prefere um filminho ou uma seriezinha?
            <small className="ml-8 flex-1 text-base text-white text-right pr-2 py-1">Filme</small>
            <ToggleSwitch id='movie' checked={movie} onChange={setMovie} />
            <small className="flex-1 text-base text-white text-right pr-2 py-1">Série</small>
          </h1>
        </div>

      </div>

      <div className='ml-14 mt-64'>
        <ButtonNext path="/filters">
          <p className='text-white ml-1'>Avançar</p>
        </ButtonNext>
      </div>

    </div>
  )
}