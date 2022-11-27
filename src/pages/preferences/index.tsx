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
          <div>
            <Image 
              src={action} 
              alt="" 
              quality={100}
              width={200}
              height={200}
            />
          </div>

          <div>
            <Image 
              src={comedy} 
              alt="" 
              quality={100}
              width={200}
              height={200}
            />
          </div>

          <div>
            <Image 
              src={drama} 
              alt="" 
              quality={100}
              width={200}
              height={200}
            />
          </div>

          <div>
            <Image 
              src={fiction} 
              alt="" 
              quality={100}
              width={200}
              height={200}
            />
          </div>

          <div>
            <Image 
              src={horror} 
              alt="" 
              quality={100}
              width={200}
              height={200}
            />
          </div>

          <div>
            <Image 
              src={romance} 
              alt="" 
              quality={100}
              width={200}
              height={200}
            />
          </div>
        </div>

        <div className='mt-8 text-white'>
          <h1 className="mb-6 text-white text-2xl font-bold leading-tight">
            Prefere um filminho ou uma seriezinha?
          </h1>
          <small className="flex-1 text-base text-white text-right pr-2 py-1">Filme</small>
          <ToggleSwitch id='yearly' checked={movie} onChange={setMovie} />
          <small className="flex-1 text-base text-white text-right pr-2 py-1">Série</small>
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