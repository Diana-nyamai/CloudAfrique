import React from 'react'
import { images } from '../../constants'

const HomeHero:React.FC = () => {
  return (
    <div className='relative bg-blue h-full flex flex-col lg:flex-row justify-center items-center lg:px-32 pb-32'>
        <div className='text-white px-5 xl:w-1/2'>
          <h1 className='text-orange text-2xl lg:text-4xl capitalize mb-4 font-playfair pt-10'>positively impact the lives of unemployed youth and women</h1>
          <p className="font-montserrat mb-4">We build the governance and management of community-owned protected areas, so they thrive as social enterprises benefitting both people and wildlife.</p>
          <div className='mt-7 flex items-center gap-4'>
            <a href="#" className='bg-orange py-3 px-5 lg:px-9 font-montserrat'>Donate Now</a>
            <a href="#" className='py-3 px-5 lg:px-9 border border-orange capitalize font-montserrat'>Know About us</a>
          </div>
        </div>

        <div>
          <img src={images.charityHome} alt="" />
        </div>
    </div>
  )
}

export default HomeHero
