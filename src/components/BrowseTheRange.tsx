import ZoomImage from "./ZoomImage";

interface Catalog {
  title: string;
  image: string
}

interface PropTypes {
  title: string;
  description: string;
  catalogs: Catalog[]
}

function BrowseTheRange({
  title,
  description,
  catalogs,
}: PropTypes) {
  return (
    <section className='mb-12'>
      <div className="container">
        <div className="text-center flex mb-10 flex-col gap-4">
          <h3 className='heading2'>
            {title}
          </h3>
          <p className='mb-5 text-[#666]'>
            {description}
          </p>
        </div>
        <div className="flex lg:gap-y-0 gap-y-4 flex-col lg:flex-row lg:w-full w-[90vw] mx-auto">
          {catalogs.map(({ title, image }) => (
            <div key={title} className="w-full lg:w-4/12 px-4">
              <div className="flex flex-col gap-y-2 text-center">
                <ZoomImage 
                  src={image} 
                  alt={title} 
                  zoomPercentage={90}
                  className="rounded"
                />
                <h5 className="heading3">{title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrowseTheRange