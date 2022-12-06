import Image from 'next/image'
import { FormEvent, useState } from 'react'

import action from '../../assets/action.png'
import comedy from '../../assets/comedy.png'
import drama from '../../assets/drama.png'
import fiction from '../../assets/fiction.png'
import horror from '../../assets/horror.png'
import romance from '../../assets/romance.png'

import ButtonPrevious from '../../components/ButtonPrevious';
import ButtonNext from '../../components/ButtonNext';
import Title from '../../components/Title';


export default function Genre() {

  return (
    <div className="grid grid-cols-6 gap-4">

      <div className='ml-6 mt-10'>
        <Title></Title>

        <div className='ml-16 mt-44'>
          <ButtonPrevious path="/">
            <p className='text-white ml-3'>Voltar</p>
          </ButtonPrevious>
        </div>
      </div>

      <div className="col-start-2 col-end-6 mr-14 ml-14 mt-20">

        <h1 className="mt-0 text-white text-4xl font-bold leading-tight">
          Gênero que mais gostaria de assistir
        </h1>

        <div className="ml-3 mt-8 grid grid-cols-3 gap-10">

          <label className="relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <input type="checkbox" className="peer sr-only" name="size-choice" />
            <span className="absolute top-2 right-2 z-10 opacity-0 transition-all peer-checked:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-500 stroke-white" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="9" />
                <path d="M9 12l2 2l4 -4" />
              </svg>
            </span>
            <div className="overflow-hidden rounded-lg shadow-md ring ring-transparent grayscale transition-all active:scale-95 peer-checked:ring-blue-500 peer-checked:grayscale-0">
              <div>
                <Image 
                  src={action} 
                  alt="" 
                  quality={100}
                  width={200}
                  height={200}
                />
              </div>
              <header className="px-2.5 py-2.5">
                <p className="text-lg text-center font-bold tracking-wide text-white">Ação</p>
              </header>
            </div>
          </label>
          
          <label className="relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <input type="checkbox" className="peer sr-only" name="size-choice" />
            <span className="absolute top-2 right-2 z-10 opacity-0 transition-all peer-checked:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-500 stroke-white" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="9" />
                <path d="M9 12l2 2l4 -4" />
              </svg>
            </span>
            <div className="overflow-hidden rounded-lg shadow-md ring ring-transparent grayscale transition-all active:scale-95 peer-checked:ring-blue-500 peer-checked:grayscale-0">
              <div>
                <Image 
                  src={comedy} 
                  alt="" 
                  quality={100}
                  width={200}
                  height={200}
                />
              </div>
              <header className="px-2.5 py-2.5">
                <p className="text-lg text-center font-bold tracking-wide text-white">Comédia</p>
              </header>
            </div>
          </label>

          <label className="relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <input type="checkbox" className="peer sr-only" name="size-choice" />
            <span className="absolute top-2 right-2 z-10 opacity-0 transition-all peer-checked:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-500 stroke-white" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="9" />
                <path d="M9 12l2 2l4 -4" />
              </svg>
            </span>
            <div className="overflow-hidden rounded-lg shadow-md ring ring-transparent grayscale transition-all active:scale-95 peer-checked:ring-blue-500 peer-checked:grayscale-0">
              <div>
                <Image 
                  src={drama} 
                  alt="" 
                  quality={100}
                  width={200}
                  height={200}
                />
              </div>
              <header className="px-2.5 py-2.5">
                <p className="text-lg text-center font-bold tracking-wide text-white">Drama</p>
              </header>
            </div>
          </label>
          
          <label className="relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <input type="checkbox" className="peer sr-only" name="size-choice" />
            <span className="absolute top-2 right-2 z-10 opacity-0 transition-all peer-checked:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-500 stroke-white" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="9" />
                <path d="M9 12l2 2l4 -4" />
              </svg>
            </span>
            <div className="overflow-hidden rounded-lg shadow-md ring ring-transparent grayscale transition-all active:scale-95 peer-checked:ring-blue-500 peer-checked:grayscale-0">
              <div>
                <Image 
                  src={fiction} 
                  alt="" 
                  quality={100}
                  width={200}
                  height={200}
                />
              </div>
              <header className="px-2.5 py-2.5">
                <p className="text-lg text-center font-bold tracking-wide text-white">Ficção</p>
              </header>
            </div>
          </label>

          <label className="relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <input type="checkbox" className="peer sr-only" name="size-choice" />
            <span className="absolute top-2 right-2 z-10 opacity-0 transition-all peer-checked:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-500 stroke-white" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="9" />
                <path d="M9 12l2 2l4 -4" />
              </svg>
            </span>
            <div className="overflow-hidden rounded-lg shadow-md ring ring-transparent grayscale transition-all active:scale-95 peer-checked:ring-blue-500 peer-checked:grayscale-0">
              <div>
                <Image 
                  src={horror} 
                  alt="" 
                  quality={100}
                  width={200}
                  height={200}
                />
              </div>
              <header className="px-2.5 py-2.5">
                <p className="text-lg text-center font-bold tracking-wide text-white">Terror</p>
              </header>
            </div>
          </label>

          <label className="relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <input type="checkbox" className="peer sr-only" name="size-choice" />
            <span className="absolute top-2 right-2 z-10 opacity-0 transition-all peer-checked:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-500 stroke-white" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="9" />
                <path d="M9 12l2 2l4 -4" />
              </svg>
            </span>
            <div className="overflow-hidden rounded-lg shadow-md ring ring-transparent grayscale transition-all active:scale-95 peer-checked:ring-blue-500 peer-checked:grayscale-0">
              <div>
                <Image 
                  src={romance} 
                  alt="" 
                  quality={100}
                  width={200}
                  height={200}
                />
              </div>
              <header className="px-2.5 py-2.5">
                <p className="text-lg text-center font-bold tracking-wide text-white">Romance</p>
              </header>
            </div>
          </label>
          
        </div>

      </div>

      <div className='ml-14 mt-64'>
        <ButtonNext path="/filters">
          <p className='text-white ml-1'>Avançar</p>
        </ButtonNext>
      </div>

    </div>
  )
}