import SearchFeed from '../components/SearchFeed'


const Portfolio = () => {
  return (
    <div className='pt-[120px] pb-8 bg-gray-100 '>
      <div className="text-center pt-3">
          <h1 className=" font-black md:text-[60px] text-[50px] text-[#14213d]">
            Portfolio
          </h1>       
        </div>
      <SearchFeed/>
    </div>
  )
}

export default Portfolio