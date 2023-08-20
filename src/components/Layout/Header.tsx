import * as React from 'react'
import { BurgerIcon, CloseIcon } from '../Icons'
import { useOnClickOutside } from '../../lib/hooks';

function Header() {
  const [open, setOpen] = React.useState(false);
  const [height, setHeight] = React.useState(0);

  const ref = React.useRef<HTMLDivElement>(null);
  const divRef = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(divRef, () => {
    if (open) {
      setOpen(false);
    }
  });

  React.useEffect(() => {
    const handleScroll = () => {
      if (open) {
        setOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [open]);

  React.useEffect(() => {
    if (open && !!ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    } else {
      setHeight(0);
    }
  }, [open]);

  return (
    <div>
      <div className="z-50 relative flex w-full">
        <div 
          className="container flex justify-between relative"
          ref={divRef}
        >
          <div className="h-20 flex">
            <a href="/" className='my-auto px-2 lg:px-0'>
              <h2 className='text-[#054C73] font-bold text-3xl'>
                Furniture
              </h2>
            </a>
          </div>

          <button
            type='button'
            className='block md:hidden outline-none focus:outline-none'
            onClick={() => setOpen(!open)}
          >
            {open ? <CloseIcon /> : <BurgerIcon className='' /> }
          </button>

          <ul className='md:flex hidden'>
            <NavLinks />
          </ul>

          <div 
            className='absolute top-20 left-0 overflow-hidden w-full shadow'
            style={{
              transition: 'height 0.2ms ease-in-out',
              height,
            }}
          >
            <div
              ref={ref}
            
            >
              {open && (
                <ul className='px-6 py-2 bg-white'>
                  <NavLinks />
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

function NavLinks() {
  return (
    <>
      {[
        'home',
        'service',
        'doctors',
        'products',
        'gallery',
      ].map(link => (
        <NavLink key={link} link={link} />
      ))}
    </>
  )
}

interface NavLinkProps {
  link: string;
}

function NavLink({ link }: NavLinkProps) {
  return (
    <li className='my-auto p-2 lg:px-5'>
      <a href="#" className='capitalize text-[#212230] text-sm font-semibold'>
        {link}
      </a>
    </li>
  )
}