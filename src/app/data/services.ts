interface Service {
  imageUrl: string
  serviceName: string
  href: string
}

export const services: Service[] = [
  {
    imageUrl: '/service1.png',
    serviceName: 'Coaching Personnel',
    href: '/services/#service1',
  },
  {
    imageUrl: '/service2.png',
    serviceName: 'Coaching Professionnel',
    href: '/services/#service2',
  },
  {
    imageUrl: '/service3.png',
    serviceName: 'Coaching Scolaire',
    href: '/services/#service3',
  },
  {
    imageUrl: '/service4.png',
    serviceName: 'Art Thérapie',
    href: '/services/#service4',
  },
]
