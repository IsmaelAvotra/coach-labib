'use client'
import Reservation from '@/app/components/reservation/Reservation'
import { articles } from '@/app/data/articles'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import { useEffect } from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function ArticleDetail({
  params,
}: {
  params: { articleId: string }
}) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 400,
    })
  }, [])

  const article = articles.find((article) => {
    return article.id === params.articleId
  })

  return (
    <div className=' articleDetail overflow-hidden'>
      <div className='mindfull'>
        <Image
          src='/mindfullness.png'
          alt='mindfullness image'
          width={1440}
          height={132}
          className='image-mindfull'
        />
      </div>
      <div className='article-top px-8 mt-8 '>
        {article ? (
          <div className='article-content  min-h-[100vh]'>
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
              <p className='text-textColor text-textSize mb-4'>
                {article.introduction}
              </p>
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
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
      <div className='reservation-art px-8 '>
        <Reservation />
      </div>
    </div>
  )
}
