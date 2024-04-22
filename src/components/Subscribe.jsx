


const Subscribe = () => {
  return (
    <>
    <div className="w-full flex items-center bg-gray-900 pb-10">
        <div className="px-12 py-10 w-full md:w-1/2 mx-auto min-h-1/2 my-auto border border-gray-300 rounded-lg shadow-md">
        <h2 className="font-bold text-2xl">Subscribe to our Newsletter</h2>
        <div className="text-gray-700 mt-4 mb-2">
          Subscribe to the newsletter to get updates about new contents and news.
        </div>
        <div className="flex items-center">
          <label htmlFor="email" className="flex-1">
            <input
              type="email"
              className="mt-1 block w-10/12 rounded-md px-4 py-3 border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              autoComplete="off"
              id="email"
              placeholder="yourEmail@gmail.com"
            />
          </label>
          <button
            className="bg-[#14213D] font-bold md:flex text-sm px-6 py-3 rounded-lg shadow-lg text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300"
            // onClick={onSubscribeButtonClick}
          >
            {/* { isSubmitting && <LoadingIcon />} */}
            Subscribe
          </button>
        </div>
        </div>
    </div>
    </>
  );
};

export default Subscribe;
