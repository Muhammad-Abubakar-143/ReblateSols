import moment from 'moment'
import { Link } from 'react-router-dom'

const PostCard = ({post}) => {

  return (
    <div className='bg-white shadow-xl rounded-lg p-0 lg:p-8 pb-12 mb-8'>
        <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
          <img loading='lazy' src={post.featuredImage.url} alt={post.title} 
          className='object-top absolute h-80 w-full object-cover rounded-xl' />
        </div>
        <h1 className='transition text-black duration-700 text-center mb-8 cursor-pointer hover:text-[#fca311] text-3xl font-semibold'>
          <Link to={`/post/${post.slug}`}>
            {post.title}
          </Link>
        </h1>
        <div className='block lg:flex text-center items-center justify-center mb-8 w-full '>
          <div className='flex items-center justify-center mb-4 lg:mb-0 lg:w-auto mr-8'>
            <img loading='lazy' src={post.author.photo.url} alt={post.author.name} height="30px" width="30px" className='align-middle rounded-full' />
            <h1 className='text-black ml-2 inline align-middle text-lg'>{post.author.name}</h1>
          </div>
          <div className='font-medium text-gray-500'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-[#fca311]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className='text-[#14213d]'>
            {moment(post.createdAt).format('MMM.DD,YYYY')}
          </span>
          </div>
        </div>
        <p className='text-center md:text-lg text-md text-gray-500 font-normal px-4 mb-8'>{post.excerpt}</p>
    <div className='text-center'>
      <Link to={`/post/${post.slug}`} className=''>
        <span className='transition duration-500 ease transform hover:-translate-y-1 inline-block bg-[#14213d] hover:bg-[#FCA311] hover:text-black hover:scale-110 md:text-lg font-medium rounded-full text-white md:px-8 md:py-3 px-4 py-2 text-xs cursor-pointer'>Continue Reading</span>
      </Link>
    </div>
    </div>
  )
}

export default PostCard