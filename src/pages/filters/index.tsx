import Image from 'next/image'
import appPreviewImg from '../../assets/claquete.png'
import { FormEvent, useState } from 'react'

import ButtonPrevious from '../../components/ButtonPrevious';
import ButtonNext from '../../components/ButtonNext';
import Title from '../../components/Title';
import InputRangeSlider from '../../components/InputRange';
//import currentYear from '../../components/CurrentYear/getCurrentYear'

let movie_serie_duration = 'minutos' //função para distinguir se eh filme ou serie


export default function Age() {

  const [age, setAge] = useState(0)
  const [year, setYear] = useState(1919) //função para pegar o ano atual e setar como maxValue
  const [duration, setDuration] = useState(1) //função para distinguir se eh filme ou serie

  return (
    <div className="grid grid-cols-6 gap-4">

      <div className='ml-6 mt-10'>
        <Title></Title>

        <div className='ml-16 mt-44'>
          <ButtonPrevious path="preferences">
            <p className='text-white ml-3'>Voltar</p>
          </ButtonPrevious>
        </div>
      </div>

      <div className="col-start-2 col-end-6 mr-14 ml-14 mt-20">

        <div className='mt-0'>
          <h1 className="mb-8 text-white text-2xl font-bold leading-tight">
            Selecione sua idade: {age}
          </h1>
          <InputRangeSlider currentValue={age} updateMainValue={setAge} minValue={0} maxValue={120} />
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            Sua indicação será com base em sua classificação indicativa
          </p>
        </div>

        <div className='mt-8'>
          <h1 className="mb-8 text-white text-2xl font-bold leading-tight">
            Selecione o ano de lançamento: {year}
          </h1>
          <InputRangeSlider currentValue={year} updateMainValue={setYear} minValue={1919} maxValue={2022} />
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            A busca será feita por filmes lançados a partir desse ano
          </p>
        </div>

        <div className='mt-8'>
          <h1 className="mb-8 text-white text-2xl font-bold leading-tight">
            Selecione a duração: {duration}
          </h1>
          <InputRangeSlider currentValue={duration} updateMainValue={setDuration} minValue={1} maxValue={300} />
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            Duração em {movie_serie_duration}
          </p>
        </div>

      </div>

      <div className='ml-14 mt-64'>
        <ButtonNext path="/platforms">
          <p className='text-white ml-1'>Avançar</p>
        </ButtonNext>
      </div>

    </div>

  )
}