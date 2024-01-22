import React from 'react'
import PostCard from '../components/PostCard'
import PostWidget from '../components/PostWidget'
import Categories from '../components/Categories'

const posts =[
  {
    title:"React Testing",
    excerpt:"Leran react blog testing"
  },
  {
    title:"React Testing",
    excerpt:"Leran react blog testing"
  },
]


const Blog = () => {
  return (
    <div className='pt-[120px] bg-gray-100 '>
    <div className="text-center pt-3">
        <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          Our Blogs
        </h1>       
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
            {posts.map((post)=><PostCard post={post} key={post.title}/>)}
        </div>
        <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8'>
                <PostWidget/>
                <Categories/>
            </div>

        </div>

      </div>

  </div>
  )
}

export default Blog