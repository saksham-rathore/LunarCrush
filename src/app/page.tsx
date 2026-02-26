import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import { Input } from 'postcss'
import Input from './components/Input'

const page = () => {
  return (
    <>
    <div className='max-w-[1440px] mx-auto p-5'>
      <Navbar />
      <Hero />
      <Input />
    </div>
    </>
  )
} 

export default page