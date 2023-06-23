import { services } from '@/app/data/services'
import Image from 'next/image'

const Services = () => {
  return (
    <div className='mt-32 service-content relative " '>
      <div className='title mb-16 '>
        <h2 className='text-brown text-titleBanner font-semibold mb-4 relative discover'>
          Nos services<span className='text-rose'>.</span>
        </h2>
        <p className='text-textSize mb-6 text-textColor '>
          Découvrez nos services avec coach Labib.
        </p>
      </div>
      <div className='flex justify-between '>
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className={`bg-white px-4 py-8 text-center flex items-center flex-col gap-10 w-[285px] h-[420px] rounded-[20px]
              ${index % 2 == 0 ? 'mt-0' : 'mt-12'}`}
            >
              <div className='top'>
                <Image
                  src={service.imageUrl}
                  alt='ilustration service'
                  width={240}
                  height={200}
                />
              </div>
              <div
                className={`w-[60%] h-[2px] ${
                  index % 2 == 0 ? 'bg-brown' : 'bg-rose'
                }  `}
              ></div>
              <div className='bottom'>
                <p
                  className={`text-textService font-bold ${
                    index % 2 == 0 ? 'text-rose' : 'text-brown'
                  }`}
                >
                  {service.serviceName}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <Image
        src='/bgservice.png'
        alt='background service'
        width={1100}
        height={980}
        className='absolute top-0 -z-10 right-[-32px] '
      />
      <Image
        src='/bgserv.png'
        alt='background service'
        width={760}
        height={600}
        className='absolute top-0 -z-10 left-[-62px] '
      />
    </div>
  )
}

export default Services