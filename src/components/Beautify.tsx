import women from '../assets/images/women.png';

function Beautify({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className='mb-10 bg-gray-200'>
      <div className="container relative lg:py-0 py-8">
        <div className="flex lg:flex-row flex-col gap-4 lg:items-center">
          <div className="w-[90vw] flex flex-col lg:w-full">
            <h4 className='heading2 capitalize mb-5'>
              {title}
            </h4>
            <p className="mb-5 text-[#666] max-w-md">
              {description}
            </p>
            <div>
              <button
                type="button"
                className="rounded-full py-6 px-14 bg-[#054C73] text-white text-base uppercase"
              >
                learn more
              </button>
            </div>
          </div>
          <div className="w-[90vw] lg:w-full relative py-8">
            <span className="absolute z-10 right-0 bottom-0 lg:top-60 lg:right-12 bg-[#09513B] w-10 h-10 lg:w-[300px] lg:h-[300px] rounded-full"></span>
              <div className="w-[500px] relative z-30">
                <img 
                  src={women}
                  alt="Women" 
                  className='lg:w-full w-[90vw] rounded-tl-custom-radius rounded-br-custom-radius rounded-tr-lg rounded-bl-lg'
                />
              </div>            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Beautify