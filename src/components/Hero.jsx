import React from 'react'
import { useNavigate } from 'react-router-dom'
import Section from './Section'
import { Typewriter } from 'react-simple-typewriter'



function Hero() {
  const navigate = useNavigate()

  return (
    <Section >
        <h1 className='text-5xl lg:text-3xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent text-center'>
         <Typewriter words={["TaskMaster","Gerenciador de Tarefas"]} typeSpeed={100} deleteSpeed={100}/>
        </h1>
        <button className='min-w-[200px] text-2xl lg:text-base w-1/3 rounded-2xl p-1 mx-auto bg-yellow-500 hover:bg-red-400' onClick={()=>{navigate("/login")}}>Acessar</button>
    </Section>
  )
}

export default Hero
