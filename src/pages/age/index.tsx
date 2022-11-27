import Image from 'next/image'
import appPreviewImg from '../../assets/claquete.png'
import { FormEvent, useState } from 'react'

import ButtonPrevious from '../../components/ButtonPrevious';
import ButtonNext from '../../components/ButtonNext';
import Title from '../../components/Title';
import InputAgeRangeSlider from '../../components/InputRange' 

import Genre from '../genre';

export let idade = ''

export default function Age() {

  const [age, setAge] = useState('')

  async function SetAge(event: FormEvent) {
    event.preventDefault()

    console.log(age)
    idade = age
  }

  return (
    <div className="grid grid-cols-6 gap-4">

      <div className='text-gray-100 ml-6 mt-10'>
        <Title></Title>

        <div className='ml-16 mt-44'>
          <ButtonPrevious path="/">
            <p className='text-white ml-3'>Voltar</p>
          </ButtonPrevious>
        </div>
      </div>

      <div className="col-start-2 col-end-6 mr-14 ml-14 mt-20">

        <h1 className="mt-0 text-white text-4xl font-bold leading-tight">
          Selecione sua idade: {age}
        </h1>

        <div className='mt-20'>
          <InputAgeRangeSlider currentValue={age} updateMainValue={setAge} minValue={0} maxValue={120} />
        </div>
        
        <form onSubmit={Genre} className="mt-10 flex gap-2">
          <input 
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100"
            type="text" 
            required 
            placeholder="Idade" 
            onChange={event => setAge(event.target.value)}
            value={age}
          />
          <button 
            className="bg-orange-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-orange-700"
            type="submit"
          >
            Vamos lá!
          </button>

        </form>

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          Você deve selecionar para avançar para a próxima página
        </p>

      </div>

      <div className='ml-14 mt-64'>
        <ButtonNext path="/genre">
          <p className='text-white ml-1'>Avançar</p>
        </ButtonNext>
      </div>

      <div className='col-start-5 col-end-7 mt-6'>
        <Image 
          src={appPreviewImg} 
          alt="" 
          quality={100}
          width={500}
          height={500}
        />
      </div>

    </div>

  )
}