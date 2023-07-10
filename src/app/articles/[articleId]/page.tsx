'use client'
import Reservation from '@/app/components/reservation/Reservation'
import { articles } from '@/app/data/articles'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Page({ params }: { params: { articleId: string } }) {
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
    <div className='articlePage px-8'>
      {article ? (
        <div className='article-content'>My Post: {article?.articleName}</div>
      ) : (
        <div> Article whith this id does not exist</div>
      )}
      <Reservation />
    </div>
  )
}
