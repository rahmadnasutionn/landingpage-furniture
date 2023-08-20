
function JoinWithUs() {
  return (
    <section className="bg-gray-200">
      <div className="container py-14 flex items-center flex-col">
        <div className="flex gap-4 text-center flex-col items-center mb-6">
          <h4 className="heading2">
            Join Our Mailing List
          </h4>
          <p className="description max-w-sm lg:max-w-lg">
            Sign up to receive inspiration, product, updates, and special offers from our team.
          </p>
        </div>
        <div className="flex items-center justify-center max-w-lg w-[90vw]">
          <input 
            type="text"
            className="w-full py-6 px-4 ring-1 rounded ring-[#011C42]"
            placeholder="example@gmail.com"
          />
          <button
            type="button"
            className="w-[153px] h-[70px] bg-[#011C42] text-white text-base rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  )
}

export default JoinWithUs