import Link from 'next/link'

import Image from 'next/image'
import axios from 'axios';
import { FormEvent, useState } from 'react'



import age from '../age';
//import genre from '../genre';
//import movie_or_tv from '../movie_or_tv';
//import duration from '../duration';
//import platforms from '../platforms';
//import released from '../released';



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

interface RecommendationProps {
    movieTitle: string
    movieDescription: string
    releaseYear: number
}

export default function Recommendation(props: RecommendationProps) {


  async function generateRecommendation(event: FormEvent) {
    event.preventDefault()

    try {
      
      const response = await axios.get('https://bj7r4fxsja.execute-api.us-east-1.amazonaws.com/pickMe', {
        params: {
            age: 20, 
            genre: "Comedy", 
            movie_or_series: "Movie, TV Show", 
            time_to_spend: 100, 
            platforms: "Disney, Netflix", 
            year: 2000 
        /*
          age: age, 
          genre: genre, 
          movie_or_series: movie_or_tv, 
          time_to_spend: duration, 
          platforms: platforms, 
          year: released 
        */
        }
      }).then((response) => {alert('Aqui está uma indicação para você: ' + response.data.title), 
      console.log(response.data), 
      getMovieTitle(response.data.title),
      getMovieDescription(response.data.description),
      getMovieReleaseYear(response.data.release_year)})
      .catch( (error) => alert(error.response.data))
      
    } catch (err) {
      console.log(err)
      alert('Falha ao gerar indicação, tente novamente!')
    }
  }

  return (
    <div className="max-w-[1124px] h-screen mr-72 ml-72 items-center">
      <main className="mb-36 mt-20">

        <h1 className="mt-0 text-white text-4xl font-bold leading-tight">
          Aqui está algo legal para assistir!
        </h1>

        <form onSubmit={generateRecommendation} className="mt-10 flex gap-2">
          <button 
            className="bg-orange-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-orange-700"
            type="submit"
          >
            Gerar indicação!
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          Ao clicar você receberá uma indicação
        </p>



        <div className="flex flex-col mt-8">
            <span className="font-bold text-2xl text-gray-300">Título: {props.movieTitle}</span>
            <span className="font-bold text-2xl text-gray-300 mt-4">Lançamento: {props.releaseYear}</span>
            <span className="font-bold text-2xl text-gray-300 mt-4">Sinopse: {props.movieDescription}</span>
        </div>
  


      </main>
    </div>
  )
}