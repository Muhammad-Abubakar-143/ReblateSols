import React,{useEffect, useState} from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({categories, slug}) => {
  const [related, setRelated] = useState([]);
  useEffect(() => {
    if(slug){
      getSimilarPosts(categories, slug).then((result)=> setRelated(result))
    }else{
      getRecentPosts().then((result)=> setRelated(result))
    }
  },[slug])
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 text-black'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>{slug ? 'Related Posts' : 'Recent Posts'}</h3>
    {related.map((posts)=>(
      <div key={posts.title} className='flex items-center w-full mb-4'>
        <div className='w-16 flex-none'>
          <img className='align-middle rounded-full' src={posts.featuredImage.url} alt={posts.title} height="60px" width="60px" />
        </div>
        <div className='flex-grow ml-4'> 
          <p className='text-gray-500 font-xs'>
            {moment(posts.createdAt).format('MMM.DD,YYYY')}
          </p>
          <Link to={`/post/${posts.slug}`} className='text-md' key={posts.title}>
          {posts.title}
          </Link>
        </div>
      </div>
    ))}
    </div>
  )
}

export default PostWidget