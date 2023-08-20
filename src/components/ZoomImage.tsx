import * as React from 'react';

interface ZoomImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  zoomPercentage: number;
  backgroundColor?: string;
  backgroundOpacity?: number;
  animationDuration?: number;
  className?: string;
}

function ZoomImage({
  zoomPercentage = 90,
  backgroundColor = 'white',
  backgroundOpacity = .9,
  animationDuration = 300,
  className = '',
  ...imageProps
}: ZoomImageProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = React.useState(false);

  const handleZoomImage = () => {
    if (!containerRef.current || clicked) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let clientWidth = containerRect.width;
    let clientHeight = containerRect.height;

    const widthPrim = (window.innerWidth - containerRect.width) / 2;
    const heightPrim = (window.innerHeight - containerRect.height) / 2;

    const clientLeft = containerRect.left;
    const clientTop = containerRect.top;

    const zoomPerc = zoomPercentage / 100;

    if (((window.innerHeight * zoomPerc) / clientHeight) * clientWidth >= window.innerWidth) {
      containerRef.current.style.transform = 
        `translate(${widthPrim - clientLeft}px, ${heightPrim - clientTop}px)
          scale(${(window.innerWidth * zoomPerc) / clientWidth})
        `
    } else {
      containerRef.current.style.transform = 
        `translate(${widthPrim - clientLeft}px, ${heightPrim - clientTop}px)
          scale(${(window.innerHeight * zoomPerc) / clientHeight})
        `
    }

    window.document.addEventListener('scroll', handleCloseZoom, { once: true });

    setClicked(true);
  };

  const handleCloseZoom = () => {
    if (!containerRef.current) return;

    containerRef.current.style.transform = `scale(1)`;
    setClicked(false);
  };


  const styles: React.CSSProperties = {
    position: 'relative',
    transition: `transform ${animationDuration}ms`,
    display: 'inline-block',
    width: '100%',
    height: '100%',
    zIndex: clicked ? 50 : 0,
    overflow: 'hidden',
    backgroundColor: clicked ? 'rgba(0,0,0,.3)' : 'transparent'
  };

  return (
    <>
      {clicked ? (
        <div
          className='bg-black opacity-60 fixed w-full h-full top-0 left-0 z-30'
          onClick={handleCloseZoom}
        />
      ) : null}

      <div 
        className=""
        style={styles}
        ref={containerRef}
        onClick={handleZoomImage}
      >
        <img 
          {...imageProps}
          className={[
            'cursor-zoom-in',
            className
          ].join(' ')}
        />
      </div>
    </>
  )
}

export default ZoomImage