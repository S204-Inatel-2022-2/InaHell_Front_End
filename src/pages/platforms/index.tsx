import Image from 'next/image'
import appPreviewImg from '../../assets/claquete.png'
import { FormEvent, useState } from 'react'


export default function Platform() {

  const [platforms, setPreferences] = useState('')

  async function SetPlatforms(event: FormEvent) {
    event.preventDefault()

    console.log(platforms)
  }

  return (
    <div className="max-w-[1124px] h-screen mr-72 ml-72 items-center">
      <main className="mb-36 mt-20">

        <h1 className="mt-0 text-white text-4xl font-bold leading-tight">
          Selecione seu(s) serviço(s) de streaming
        </h1>

        <form onSubmit={SetPlatforms} className="mt-10 flex gap-2">
          <input 
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100"
            type="" 
            required 
            placeholder="Plataformas" 
            onChange={event => setPreferences(event.target.value)}
            value={platforms}
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

        <Image 
          src={appPreviewImg}
          alt="" 
          quality={100}
          width={400}
          height={400}
        />
      </main>


    </div>
  )
}