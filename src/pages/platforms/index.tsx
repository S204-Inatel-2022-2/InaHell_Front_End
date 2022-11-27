import Image from 'next/image'
import appPreviewImg from '../../assets/claquete.png'
import { FormEvent, useState } from 'react'

import ButtonPrevious from '../../components/ButtonPrevious';
import ButtonNext from '../../components/ButtonNext';
import Title from '../../components/Title';

import disney from '../../assets/disneyPlus.png'
import hbo from '../../assets/hboMax.png'
import netflix from '../../assets/netflix.png'
import prime from '../../assets/primeVideo.png'


export default function Platform() {

  const [platforms, setPreferences] = useState('')

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

        <h1 className="mt-0 text-white text-4xl font-bold leading-tight">
          Selecione seu(s) serviço(s) de streaming
        </h1>

        <div className="mt-24 grid grid-cols-4 gap-4">
          <div>
            <Image 
              src={disney} 
              alt="" 
              quality={100}
              width={200}
              height={200}
            />
          </div>

          <div>
            <Image 
              src={hbo} 
              alt="" 
              quality={100}
              width={200}
              height={200}
            />
          </div>

          <div>
            <Image 
              src={netflix} 
              alt="" 
              quality={100}
              width={200}
              height={200}
            />
          </div>

          <div>
            <Image 
              src={prime} 
              alt="" 
              quality={100}
              width={200}
              height={200}
            />
          </div>

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