import React, { useEffect, useState } from 'react'
import { getAdjacentPosts } from '../services';
import AdjacentPostCard from './AdjacentPostCard';

const AdjacentPosts = ({ slug, createdAt }) => {
    const [adjacentPost, setAdjacentPost] = useState(null);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        getAdjacentPosts(createdAt, slug).then((result) => {
            setAdjacentPost(result);
            setDataLoaded(true);
        });
    }, [slug, createdAt]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-8 gap-12 mb-8">
    {dataLoaded && (
      <>
        {adjacentPost.previous && (
          <div className={`${adjacentPost.next ? 'col-span-1 lg:col-span-4' : 'col-span-1 lg:col-span-8'} adjacent-post rounded-lg relative h-72`}>
            <AdjacentPostCard post={adjacentPost.previous} position="LEFT" />
          </div>
        )}
        {adjacentPost.next && (
          <div className={`${adjacentPost.previous ? 'col-span-1 lg:col-span-4' : 'col-span-1 lg:col-span-8'} adjacent-post rounded-lg relative h-72`}>
            <AdjacentPostCard post={adjacentPost.next} position="RIGHT" />
          </div>
        )}
      </>
    )}
  </div>
  )
}

export default AdjacentPosts