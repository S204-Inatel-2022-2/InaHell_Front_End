import Image from 'next/image'
import appPreviewImg from '../assets/claquete.png'
import logoImg from '../assets/logo.png'
//import { api } from '../lib/axios'
import { FormEvent, useState } from 'react'

export let movieTitle = {}
export let movieDescription = {}
export let ReleaseYear = {}

export function getMovieTitle (info: object){
  movieTitle = info
  console.log(movieTitle)
}

export function getMovieDescription (info: object){
  movieDescription = info
  console.log(movieDescription)
}

export function getMovieReleaseYear (info: object){
  ReleaseYear = info
  console.log(ReleaseYear)
}

export default function Home() {

  const [preferences, setPreferences] = useState('')
  console.log(preferences)

  async function generateRecommendation(event: FormEvent) {
    event.preventDefault()

    try {

      fetch('https://bj7r4fxsja.execute-api.us-east-1.amazonaws.com/pickMe', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: preferences,
      })
      .then( (response) => response.json())
      .then((data) => {alert('Aqui está uma indicação para você: ' + data.title), 
      console.log(data), 
      getMovieTitle(data.title),
      getMovieDescription(data.description),
      getMovieReleaseYear(data.release_year)}) // output will be the required data
      .catch( (error) => console.log(error))

      setPreferences('')

    } catch (err) {
      console.log(err)
      alert('Falha ao gerar indicação, tente novamente!')
    }
  }

  return (
    <div className="max-w-[1124px] h-screen mr-52 ml-72 grid grid-cols-2 items-center">
      <main className="mb-36">
        <Image src={logoImg} alt="Logo" className="mt-6"/>

        <h1 className="mt-0 text-white text-4xl font-bold leading-tight">
          Insira as suas preferências e te indicaremos algo legal para assistir!
        </h1>

        <form onSubmit={generateRecommendation} className="mt-10 flex gap-2">
          <input 
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100"
            type="text" 
            required 
            placeholder="Preferências" 
            onChange={event => setPreferences(event.target.value)}
            value={preferences}
          />
          <button 
            className="bg-orange-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-orange-700"
            type="submit"
          >
            Vamos lá!
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          Ao clicar você receberá uma indicação
        </p>
      </main>

      <Image 
        src={appPreviewImg} 
        alt="" 
        quality={100}
      />
    </div>
  )
}