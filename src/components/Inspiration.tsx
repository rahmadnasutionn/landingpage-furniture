import decoration from '../assets/images/decoration-1.png';
import decoration2 from '../assets/images/decoration-2.png';
import decoration3 from '../assets/images/decoration-3.png';


function Inspiration() {
  return (
    <section className='mb-40'>
      <div className="container">
        <div className="text-center gap-2 flex flex-col mb-12">
          <h4 className='heading2'>Inspiration Collection</h4>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="w-full flex lg:flex-row flex-col gap-10 items-center justify-center">
          <div className="lg:w-3/12 w-full">
            <img 
              src={decoration}
              alt="decoration"
              className='w-full h-full rounded-tl-custom-radius'
            />
          </div>
          <div className="lg:w-3/12 w-full lg:-mt-10">
            <img 
              src={decoration2}
              alt="decoration2"
              className='w-full h-full'
            />
          </div>
          <div className="lg:w-3/12 w-full">
            <img 
              src={decoration3}
              alt="decoration3"
              className='w-full h-full rounded-br-custom-radius'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Inspiration