import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { SlCalender } from "react-icons/sl";

const PostCard = ({post}) => {

  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
        <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
          <img src={post.featuredImage.url} alt={post.title} 
          className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg' />
        </div>
        <h1 className='transition text-black duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold'>
          <Link to={`/post/${post.slug}`}>
            {post.title}
          </Link>
        </h1>
        <div className='block lg:flex text-center items-center justify-center mb-8 w-full '>
          <div className='flex items-center justify-center mb-4 lg:mb-0 lg:w-auto mr-8'>
            <img src={post.author.photo.url} alt={post.author.name} height="30px" width="30px" className='align-middle rounded-full' />
            <p className='text-gray-500 ml-2 inline align-middle text-lg'>{post.author.name}</p>
          </div>
          <div className='font-medium text-gray-500'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>
            {moment(post.createdAt).format('MMM.DD,YYYY')}
          </span>
          </div>
        </div>
        <p className='text-center text-lg text-gray-500 font-normal px-4  mb-8'>{post.excerpt}</p>
    <div className='text-center'>
      <Link to={`/post/${post.slug}`}>
        <span className='transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>Continue Reading</span>
      </Link>
    </div>
    </div>
  )
}

export default PostCard