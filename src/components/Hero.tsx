import React from 'react'

function Hero() {
  return (
    <header className='bg-hero bg-hero-furniture min-h-screen overflow-hidden'>
      <div className="flex mx-auto mt-60">
        <div 
          className="p-4 bg-[#DFE9F4] shadow max-w-[90vw] mx-auto lg:ml-auto lg:mr-72 lg:max-w-xl rounded-lg flex flex-col"
        >
          <h1 className='text-[#333] font-semibold'>
            New Arrival
          </h1>
          <h2 className='heading1 leading-tight mb-4 max-w-md'>
            Discover Our <br />
            New Collection
          </h2>
          <p className="max-w-md mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <div>
            <button
              type='button'
              className='bg-[#054C73] text-white text-base py-6 px-[72px] rounded-full'
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero