import Image from 'next/image'
import appPreviewImg from '../../assets/claquete.png'
import logo from '../../assets/logo.png'
import { FormEvent, useState } from 'react'

import ButtonNext from '../../components/Buttons';
import ButtonPrevious from '../../components/Buttons';

import Title from '../../components/Title';

export let idade = ''

export default function Age() {

  const [age, setPreferences] = useState('')

  async function SetAge(event: FormEvent) {
    event.preventDefault()

    console.log(age)
    idade = age
  }

  return (
    <div className="max-w-[1124px] h-screen mr-72 ml-6 grid grid-cols-2 items-center">

      <div className='text-gray-100'>
        <Title>
          <a href="/"><Image 
            src={logo} 
            alt="" 
            quality={100}
            width={180}
            height={180}
          /></a>
        </Title>
      </div>

      <main className="mb-36 mt-20">

        <h1 className="mt-0 text-white text-4xl font-bold leading-tight">
          Selecione sua faixa etária
        </h1>

        <form onSubmit={SetAge} className="mt-10 flex gap-2">
          <input 
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100"
            type="text" 
            required 
            placeholder="Idade" 
            onChange={event => setPreferences(event.target.value)}
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

      </main>

    </div>

  )
}