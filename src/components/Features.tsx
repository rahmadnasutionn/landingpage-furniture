import {
  Shield,
  Timer,
  TruckIcon,
} from './Icons';

function Features() {
  const benefits = [
    {
      title: 'Free Delivery',
      icon: TruckIcon,
      description:
        'Lorem ipsum dolor sit amet.'
    },
    {
      title: 'Support 24/7',
      icon: Timer,
      description:
        'Lorem ipsum dolor sit amet.'
    },
    {
      title: '100% Authentic',
      icon: Shield,
      description:
        'Lorem ipsum dolor sit amet.'
    },
  ]

  return (
    <section className='bg-gray-200 mb-10 w-full'>
      <div className="container py-6 mx-auto w-full">
        <div className="flex flex-col w-full">
          <div className="w-full flex lg:flex-row gap-y-4 lg:gap-y-0 flex-col items-center px-4">
            {benefits.map(benefit => (
              <div key={benefit.title} className='flex w-full gap-4 items-center'>
                <benefit.icon className='w-8 h-8 lg:w-10 lg:h-10' />
                <div className=''>
                  <h3 className='heading3'>
                    {benefit.title}
                  </h3>
                  <span className='description'>
                    {benefit.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features