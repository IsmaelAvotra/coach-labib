'use client'
import Reservation from '@/app/components/reservation/Reservation'
import { articles } from '@/app/data/articles'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

export default function ArticleDetail() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      delay: 400,
    })
  }, [])

  const article = articles.find((article) => {
    return article.id === '2'
  })

  return (
    <div className=' articleDetail overflow-hidden'>
      <div className='mindfull relative'>
        <Image
          src='/mindfullness.png'
          alt='mindfullness image'
          width={1440}
          height={132}
          className='image-mindfull  object-cover'
        />
        <div className='text absolute left-8 top-[20%]  text-[20px]  text-white '>
          <div className='link flex  gap-4'>
            <Link href='/'>Accueil</Link>
            <p>&gt;</p>
            <Link href='/articles'>Articles</Link>
          </div>
          <div className='art'>
            <p className='text-[40px] font-semibold'>
              Articles <span className='text-rose '>.</span>
            </p>
          </div>
        </div>
      </div>
      <div className='article-top px-8 mt-8'>
        {article ? (
          <div className='article-content '>
            <div className='title'>
              <h2 className='text-brown text-[48px] font-semibold mb-4 '>
                {article.articleName}
              </h2>
              <div className='author-date flex gap-4 mb-6 text-[18px] text-[#83584f]  font-semibold'>
                <p className=''>{article.author}</p>
                <p>|</p>
                <p>{article.date}</p>
              </div>
            </div>
            <div className='image-art mb-4'>
              <Image
                src={article.imageUrl}
                alt={article.articleName}
                width={580}
                height={450}
                className='rounded-[24px]'
              />
            </div>
            <p className='summary text-[20px] text-[#222] mb-4'>
              "{article.summary}"
            </p>
            <div className='intro'>
              <p className='intro-text text-[#83584f] font-semibold text-[28px] mb-2'>
                Introduction :
              </p>
              <p className='text-textColor  text-textSize mb-2'>
                {article.introduction}
              </p>
              <div className='text-textColor text-textSize mb-4'>
                <p className='mb-2'>
                  <span className='mr-2'>1.</span>
                  {article.one}
                </p>
                <p className='mb-2'>
                  <span className='mr-2'>2.</span>
                  {article.two}
                </p>
                <p className='mb-2'>
                  <span className='mr-2'>3.</span>
                  {article.three}
                </p>
                <p className='mb-2'>
                  <span className='mr-2'>4.</span>
                  {article.four}
                </p>
                <p className='mb-2'>
                  <span className='mr-2'>5.</span>
                  {article.five}
                </p>
                <p className='mb-2'>
                  <span className='mr-2'>{article.six ? '6.' : ''}</span>
                  {article.six ?? article.six}
                </p>
              </div>
            </div>
            <div className='conclusion'>
              <p className='text-[#83584f] font-semibold text-[28px] mb-2 conclu-text'>
                Conclusion :
              </p>
              <p className='text-textColor text-textSize'>
                {article.conclusion}
              </p>
            </div>
          </div>
        ) : (
          <div> Article whith this id does not exist</div>
        )}
      </div>
      <div className='line w-[80vw] h-[1px] bg-rose mt-10 m-auto'></div>

      <div className='share flex gap-2 mt-8 px-8'>
        <p className='text-[22px] text-[#222]/80'>Share this :</p>
        <div className='rs flex items-center gap-4 text-[26px] text-rose '>
          <FaFacebook />
          <FaInstagram />
        </div>
      </div>
      <div className='reservation-art px-8 '>
        <Reservation />
      </div>
    </div>
  )
}
