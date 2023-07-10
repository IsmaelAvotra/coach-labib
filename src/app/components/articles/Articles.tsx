import { articles } from '@/app/data/articles'
import Image from 'next/image'
import './Articles.css'
import Link from 'next/link'

const Articles = () => {
  return (
    <div className='articles flex flex-col items-center mb-20 ' id='articles'>
      <div className='title text-center mb-16'>
        <h2 className='text-brown text-titleBanner font-semibold mb-4 '>
          Articles<span className='text-rose'>.</span>
        </h2>
        <p className='text-textSize mb-6 text-textColor'>
          Découvrez nos articles pour des contenus riches et captivants.
        </p>
      </div>
      <div className='main-content grid grid-cols-2 gap-12'>
        {articles.map((article) => {
          return (
            <Link href={`/articles/${article.id}`} key={article.id}>
              <div
                className='article-card p-4  cursor-pointer rounded-lg'
                data-aos='fade-up'
                data-aos-delay='400'
              >
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
                  <p className='para text-link  text-textColor '>
                    {article.introduction.slice(0, 140)} ...
                  </p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Articles
