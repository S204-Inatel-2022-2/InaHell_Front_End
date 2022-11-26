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
        <Link href="/age"><button 
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