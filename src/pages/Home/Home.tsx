import React from 'react'
import { About, HomeHero } from '../../components'

const Home:React.FC = () => {
  return (
    <div className='bg-blueColor'>
        <HomeHero/>
        <div className='flex flex-col gap-6 mt-5 lg:flex-row lg
        :gap-20 w-[70%] mx-auto lg:absolute lg:top-[40%] lg:left-[15%]'>
          <div className='bg-gradient text-white p-5 text-center rounded-md'>
            <h2 className='font-playfair text-2xl mb-5'>Our mission</h2>
            <p className='font-montserrat'>To build and support successful sustainable community-based conservation outcomes in Tanzania.</p>
          </div>
          <div className='bg-gradient text-white p-5 text-center rounded-md'>
            <h2 className='font-playfair text-2xl mb-5'>Our  vision</h2>
            <p className='font-montserrat'>Communities and wildlife in Tanzania benefit from each other’s existence and thrive for generations to come.</p>
          </div>
        </div>

        {/* about */}
        <div className='mt-20 px-4 lg:mt-80 mb-20'>
           <About/>
        </div>
       
    </div>
  )
}

export default Home
