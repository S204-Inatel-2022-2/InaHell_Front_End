import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios';
import { FormEvent, useState } from 'react'

import ButtonPrevious from '../../components/ButtonPrevious';
import ButtonNext from '../../components/ButtonNext';
import Title from '../../components/Title';

import age from '../filters';
import duration from '../filters';
import year from '../filters';
//import genre from '../genre';
//import movie_or_tv from '../movie_or_tv';
//import platforms from '../platforms';

export const getServerSideProps = async () => {

  try{
    const movie_info = await Promise.resolve(

      axios.get('https://bj7r4fxsja.execute-api.us-east-1.amazonaws.com/pickMe', {
        params: {
          age: 12, 
          genre: "Comedy", 
          movie_or_series: "TV Show", 
          time_to_spend: 180, 
          platforms: "Disney", 
          year: 2000
        /*
          age: age, 
          genre: genre, 
          movie_or_series: movie_or_tv, 
          time_to_spend: duration, 
          platforms: platforms, 
          year: year 
        */
      } 
    }))
  
    return {
      props: {
      title: movie_info.data.title,
      released: movie_info.data.release_year,
      description: movie_info.data.description,
      platforms: movie_info.data.plataform,
      type: movie_info.data.type,
      duration: movie_info.data.duration
      }
    }
  } catch(err) {
    console.log(err)
    alert('Falha ao gerar indicação, tente novamente!')
  }
}
 
/*
function defineDuration(props: RecommendationProps){
  if(props.type === 'Movie'){
    let min = props.duration%60
    let hour = (props.duration-min)/60
    //console.log(hour+'h'+min+'min')
    let time = hour+'h'+min+'min'
    let timeStr = time.toString()
    props.time = timeStr
  }
  //console.log(duration+' temporadas')
  let season = duration+' temporadas'
  let seasonStr = season.toString()
  props.time = seasonStr
}
*/

interface RecommendationProps {
    title: string
    released: number
    description: string
    platforms: string
    type: string
    duration: number
    time: string
}

export default function Recommendation(props: RecommendationProps) {

  //defineDuration(props)

  return (
    <div className="grid grid-cols-6 gap-4">

      <div className='ml-6 mt-10'>
        <Title></Title>

        <div className='ml-16 mt-44'>
          <ButtonPrevious path="platforms">
            <p className='text-white ml-3'>Voltar</p>
          </ButtonPrevious>
        </div>
      </div>

      <div className="col-start-2 col-end-6 mr-14 ml-14 mt-20">

        <h1 className="mt-0 text-white text-4xl font-bold leading-tight">
          Aqui está algo legal para assistir!
        </h1>

        <div className="flex flex-col mt-8">
            <span className="font-bold text-2xl text-gray-300">Título: {props.title}</span>
            <span className="font-bold text-2xl text-gray-300">Lançamento: {props.released}</span>
            <span className="font-bold text-2xl text-gray-300">Descrição: {props.description}</span>
            <span className="font-bold text-2xl text-gray-300">Onde assitir: {props.platforms}</span>
            <span className="font-bold text-2xl text-gray-300">Duração: {props.duration}</span>
        </div>
      </div>

    </div>
  )
}