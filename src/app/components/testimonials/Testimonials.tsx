'use client'
import { testimonials } from '@/app/data/testimonials'
import Image from 'next/image'
import React, { useState } from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const [index, setIndex] = useState<number>(2)
  return (
    <div className='testimonials mt-32 px-[300px]'>
      <div className='title text-center mb-12'>
        <h2 className='text-brown text-titleBanner font-semibold mb-4 '>
          Témoignage clients<span className='text-rose'>.</span>
        </h2>
        <p className='text-textSize mb-6 text-textColor '>
          Vous trouverez les témoignages de nos précieux clients. Découvrez{' '}
          <br /> ce qu'ils ont à dire sur leur expérience avec nos services.
        </p>
      </div>
      <div className='text'>
        <div className='quote flex justify-between items-center'>
          <span className='text-rose text-titleBanner font-bold'>"</span>
          <div className='divider h-[2px] w-[300px] bg-brownBlack'></div>
          <span className='text-rose text-titleBanner font-bold'>"</span>
        </div>
        <p className='text-textSize mb-6 text-textColor test-text'>
          {testimonials[index]['testi']}
        </p>
      </div>
      <div className='profils mt-10 flex justify-center gap-16 cursor-pointer'>
        {testimonials.map((testimonial, idx) => {
          return (
            <div
              key={idx}
              className='flex flex-col items-center '
              onClick={() => setIndex(idx)}
            >
              <div className='top mb-4'>
                <Image
                  src={testimonial.imageUrl}
                  alt='testimonial profile'
                  width={50}
                  height={50}
                  className={`${
                    idx == index
                      ? 'border-4 border-rose rounded-full w-[70px] h-[70-px]'
                      : 'border-0 '
                  }`}
                />
              </div>
              <div className='bottom text-center'>
                <p
                  className={`${
                    idx == index
                      ? 'name text-textSize text-brownBlack font-bold mb-1'
                      : 'hidden'
                  }`}
                >
                  {testimonial.name}
                </p>
                <p
                  className={`${
                    idx == index ? 'text-link role' : ' hidden text-brown'
                  }`}
                >
                  {testimonial.work}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Testimonials
