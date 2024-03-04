"use client";

import Image from 'next/image';
import  CustomButton  from './CustomButton';


const Hero = () => {
  const handleScroll = () => {

  }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
          <h1 className='hero__title'>Find, book or rent a cars Quickly!</h1>
          <p className='hero__subtitle'>Get your car rental experience with
           our effortless experience bookings process.</p>

           <CustomButton 
           title="Explore Cars"
           containerStyles="bg-primary-blue text-amber-200 rounded-full mt-10"
           handleClick={handleScroll}
           />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
         <Image src="/hummer.png" alt="blue"
         fill className='object-contain' />
         <div className='hero__image-overlay' />
        </div>
      </div>
    </div>
  )
}

export default Hero