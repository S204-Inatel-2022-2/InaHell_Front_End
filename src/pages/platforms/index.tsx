import Image from 'next/image'
import appPreviewImg from '../../assets/claquete.png'
import { FormEvent, useState } from 'react'

import ButtonPrevious from '../../components/ButtonPrevious';
import ButtonNext from '../../components/ButtonNext';
import Title from '../../components/Title';
import ToggleSwitch from '../../components/Toggle/toggleSwitch'


import disney from '../../assets/disneyPlus.png'
import hbo from '../../assets/hboMax.png'
import netflix from '../../assets/netflix.png'
import prime from '../../assets/primeVideo.png'


export default function Platform() {

  const [platforms, setPreferences] = useState('')
  const [movie, setMovie] = useState('')


  async function SetPlatforms(event: FormEvent) {
    event.preventDefault()

    console.log(platforms)
  }

  return (
    <div className="grid grid-cols-6 gap-4">

      <div className='ml-6 mt-10'>
        <Title></Title>

        <div className='ml-16 mt-44'>
          <ButtonPrevious path="filters">
            <p className='text-white ml-3'>Voltar</p>
          </ButtonPrevious>
        </div>
      </div>

      <div className="col-start-2 col-end-6 mr-14 ml-14 mt-20">

        <h1 className="text-white text-4xl font-bold leading-tight">
          Selecione seu(s) serviço(s) de streaming
        </h1>

        <div className="mt-20 grid grid-cols-4 gap-4">

          <div className='cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <Image 
              src={disney} 
              alt="" 
              quality={100}
              width={200}
              height={200}
            />
          </div>

          <div className='cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <Image 
              src={hbo} 
              alt="" 
              quality={100}
              width={200}
              height={200}
            />
          </div>

          <div className='cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <Image 
              src={netflix} 
              alt="" 
              quality={100}
              width={200}
              height={200}
            />
          </div>

          <div className='cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <Image 
              src={prime} 
              alt="" 
              quality={100}
              width={200}
              height={200}
            />
          </div>

        </div>

        <div className='mt-16 text-white'>
          <h1 className="text-white text-3xl leading-tight">
            Prefere um filminho ou uma seriezinha?
            <small className="ml-8 flex-1 text-xl text-white text-right pr-2 py-1">Filme</small>
            <ToggleSwitch id='movie' checked={movie} onChange={setMovie} />
            <small className="flex-1 text-xl text-white text-right pr-2 py-1">Série</small>
          </h1>
        </div>

      </div>

      
      <div className='ml-14 mt-64'>
        <ButtonNext path="/recommendation">
          <p className='text-white ml-1'>Avançar</p>
        </ButtonNext>
      </div>  

    </div>
  )
}