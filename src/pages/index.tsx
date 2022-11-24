import Link from 'next/link'

import Image from 'next/image'
import appPreviewImg from '../assets/claquete.png'
import logoImg from '../assets/logo.png'
import axios from 'axios';
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

  async function generateRecommendation(event: FormEvent) {
    event.preventDefault()

    try {
      
      const response = await axios.get('https://bj7r4fxsja.execute-api.us-east-1.amazonaws.com/pickMe', {
        params: {
          age: 11,
          genre: preferences,
          movie_or_series: "Movie, TV Show",
          time_to_spend: 100,
          platforms: "Disney",
          year: 2020
        }
      }).then((response) => {alert('Aqui está uma indicação para você: ' + response.data.title), 
      console.log(response.data), 
      getMovieTitle(response.data.title),
      getMovieDescription(response.data.description),
      getMovieReleaseYear(response.data.release_year)})
      .catch( (error) => alert(error.response.data))

      setPreferences('')

    } catch (err) {
      console.log(err)
      alert('Falha ao gerar indicação, tente novamente!')
    }
  }

  return (
    <div className="max-w-[1124px] h-screen mr-52 ml-72 grid grid-cols-2 items-center">
      <main className="mt-16 mb-36">
        <Image src={logoImg} alt="Logo" className="mt-6"/>

        <h1 className="mt-8 mb-8 text-white text-4xl font-bold leading-tight">
          Insira suas preferências e te indicaremos algo legal para assistir!
        </h1>

        <Link href="/age"><button 
            className="bg-orange-500 px-6 py-4 rounded text-gray-900 font-extrabold text-3xl hover:bg-orange-700"
            type="submit"
          >
            Vamos lá!
          </button>
        </Link>
      </main>

      <Image 
        src={appPreviewImg} 
        alt="" 
        quality={100}
        width={500}
        height={500}
      />
    </div>
  )
}