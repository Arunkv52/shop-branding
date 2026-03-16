import React from 'react'
import ScrollImage from '../components/ScrollImage'

const Gallery = () => {
  return (
    <div className='bg-black md:py-20 py-10' id='about'>
      <ScrollImage />
      <div className='scr-txt md:pt-20 pt-0 md:px-20 px-5 md:flex text-white'>
        <div className='md:w-1/2 w-full  md:pb-0 pb-10'>
          <h2 className='text-left text-white md:text-6xl text-3xl text-lowercase'>
            Elevate Your Space with
            <span className='text-white/50'> Inshop Branding</span>
          </h2>
        </div>
        <div className='md:w-1/2 w-full md:px-10'>
          <p className='py-2 text-3xl pb-6 text-white/60'>
             Inshop branding turns
            interiors into impactful brand spaces that <span className='text-white'>attract attention,</span> 
            <span className='text-white'>build trust,</span> and <span className='text-white'>drive sales.</span> From wall graphics and product displays to
            illuminated signage and décor, every element reflects your brand’s
            identity.
          </p>
          <p className='py-0 text-3xl pb-6 text-white/60'> At Prism Adverto, we combine creativity and precision to
            craft immersive spaces that connect, engage, and <span className='text-white'>leave a
            lasting impression.</span></p>
        </div>
      </div>
    </div>
  )
}

export default Gallery
