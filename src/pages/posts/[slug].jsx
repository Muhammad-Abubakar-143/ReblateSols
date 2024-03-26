import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPosts, getPostDetails } from '../../services';
import PostWidget from '../../components/PostWidget';
import Categories from '../../components/Categories';
import PostDetail from '../../components/PostDetail';
import Author from '../../components/Author';
import CommentsForm from '../../components/CommentsForm';
import Comments from '../../components/Comments';
import AdjacentPosts from '../../components/AdjacentPosts';

const PostDetails = () => {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPostDetails(slug);
      setPosts(data);
      setIsLoading(false); // Set loading to false once the data has been fetched
    };

    fetchPosts();
  }, []);



  // Now you can use the post data to display the correct blog post
  return (
    <>
    <div className='px-10 pb-8 pt-[120px] bg-white'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {!isLoading && ( // Only render these components once the data has been loaded
            <>
              <PostDetail posts={posts}/>
              <Author author={posts.author}/>
              <AdjacentPosts slug={posts.slug} createdAt={posts.createdAt} />
              <CommentsForm slug={posts.slug}/>
              <Comments slug={posts.slug}/>
            </>
          )}
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative lg:sticky top-8'>
          <PostWidget slug={posts.slug} categories={posts?.categories?.map((category) => category.slug)}/>

          <Categories/>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default PostDetails;
