interface Item {
  id: number;
  image: string;
  text: string;
  description: string;
}

interface PropTypes {
  title: string;
  content: string;
  items: Item[]
};

function HowItWorks({
  title,
  content,
  items,
}: PropTypes) {
  return (
    <section className='mb-32'>
      <div className="container">
        <div className="text-center flex flex-col mb-10 gap-4">
          <h3 className='heading2'>
            {title}
          </h3>
          <p className='mb-5 text-[#666]'>
            {content}
          </p>
        </div>
        <div className="flex gap-x-8 gap-y-6 lg:gap-y-0 lg:flex-row flex-col mx-auto">
          {items.map(item => (
            <CardItem key={item.id} { ...item } />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

function CardItem({ id, text, description, image }: Item) {
  return (
    <div className="w-full flex flex-col">
      <div className="relative flex flex-col gap-y-2 text-center">
        <img 
          src={image}
          alt={text}
          className='rounded'
        />
        <span className="absolute bottom-0 left-[50%] bullets">
          {id}.
        </span>
      </div>
      <div className="relative mt-10 text-center flex flex-col items-center">
        <h4 className='text-[#333] mb-2 text-[24px] font-bold'>{text}</h4>
        <p className='max-w-xs description'>
          {description}
        </p>
      </div>
    </div>
  )
}