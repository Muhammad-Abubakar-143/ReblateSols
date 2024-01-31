import React, { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'
import PostWidget from '../components/PostWidget'
import Categories from '../components/Categories'
import { getPosts } from '../services'


const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getPosts();
      setPosts(postsData);
    };

    fetchPosts();
  }, []);
  return (
    <div className='pt-[120px] bg-gray-100 '>
    <div className="text-center pt-3">
        <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          Our Blogs
        </h1>       
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1 grid grid-cols-1 md:grid-cols-2 ld:grid-cols-3 gap-4'>
            {posts && posts.map((post)=>(
              <PostCard post={post.node} key={post.title}/>
            ))}
        </div>
        <div className='lg:col-span-4 col-span-1 mb-4'>
            <div className='lg:sticky relative top-28'>
                <PostWidget/>
                <Categories/>
            </div>

        </div>

      </div>

  </div>
  )
}

export default Blog


