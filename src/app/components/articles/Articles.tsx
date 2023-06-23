import { articles } from '@/app/data/articles'
import Image from 'next/image'
import React from 'react'

const Articles = () => {
  return (
    <div className='flex flex-col items-center mb-20'>
      <div className='title text-center mb-16'>
        <h2 className='text-brown text-titleBanner font-semibold mb-4 '>
          Articles<span className='text-rose'>.</span>
        </h2>
        <p className='text-textSize mb-6 text-textColor'>
          Découvrez nos articles pour des contenus riches et captivants.
        </p>
      </div>
      <div className='container grid grid-cols-2 gap-12'>
        {articles.map((article, index) => {
          return (
            <div key={index} className=' p-4'>
              <div className='top mb-4'>
                <Image
                  src={article.imageUrl}
                  alt={article.articleName}
                  width={580}
                  height={450}
                  className='rounded-[24px]'
                />
              </div>
              <div className='bottom'>
                <span className='text-[14px] text-[#2e3e5c]/80'>
                  {article.date}
                </span>
                <p className='mt-2 text-[24px] font-bold'>
                  {article.articleName}
                </p>
                <p className='text-link  text-textColor '>{article.para}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Articles