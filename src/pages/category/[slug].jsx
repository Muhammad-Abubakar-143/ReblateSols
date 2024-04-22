import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategoryPost } from '../../services';
import PostCard from '../../components/PostCard';
import Categories from '../../components/Categories';
import PostLoader from '../../components/PostLoader';

const CategoryPost = () => {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getCategoryPost(slug);
      setPosts(posts);
      setLoading(false);
    };

    fetchPosts();
  }, [slug]);

  if (loading) {
    return <PostLoader />;
  }

  return (
    <div className='pt-[120px] bg-gray-100 pb-8'>

    <div className="container mx-auto px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CategoryPost;
