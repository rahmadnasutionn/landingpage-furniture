import IG1 from '../../assets/images/ig-1.jpg';
import IG2 from '../../assets/images/ig-2.jpg';
import IG3 from '../../assets/images/ig-3.jpg';
import IG4 from '../../assets/images/ig-4.jpg';

function Footer() {
  return (
    <footer className='bg-[#03344F]'>
      <div className="container py-10 overflow-hidden">
        <div className="flex lg:flex-row flex-col gap-y-4 lg:gap-0 lg:items-center">
          <div className="flex flex-col gap-2">
            <div className="w-full flex flex-col gap-x-2 lg:pr-10">
              <h4 className='text-[24px] text-white mb-8'>
                Beauty Care
              </h4>
              <p className="text-base text-white max-w-[400px] mb-5">
              Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <a href="#" className='text-[24px] text-white'>
                Follow Us
              </a>
            </div>
          </div>
          <div className="flex flex-col mt-10">
            <div className="w-full flex flex-col gap-4">
              <h4 className='text-white text-[24px]'>Instagram Shop</h4>
              <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-2 lg:gap-6">
                <div className="lg:w-[200px] lg:h-[200px]">
                  <img 
                    src={IG1}
                    alt="Instagram Shop"
                    className='rounded w-full h-full'
                  />
                </div>
                <div className="lg:w-[200px] lg:h-[200px]">
                  <img 
                    src={IG2}
                    alt="Instagram Shop"
                    className='rounded w-full h-full'
                  />
                </div>
                <div className="lg:w-[200px] lg:h-[200px]">
                  <img 
                    src={IG3}
                    alt="Instagram Shop"
                    className='rounded w-full h-full'
                  />
                </div>
                <div className="lg:w-[200px] lg:h-[200px]">
                  <img 
                    src={IG4}
                    alt="Instagram Shop"
                    className='rounded w-full h-full'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer