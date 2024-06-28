import moment from 'moment';
import React from 'react';

const PostDetail = ({ posts }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index} className='text-gray-700 font-semibold'>{modifiedText}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index} className='text-gray-700'>{modifiedText}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index} className='text-gray-700'>{modifiedText}</u>);
      }

      if (obj.href) {
        // console.log(obj.text);  // Log the link to verify
        modifiedText = (
          <a 
            key={index} 
            href={obj.href} 
            target={obj.openInNewTab ? '_blank' : '_self'} 
            rel={obj.openInNewTab ? 'noopener noreferrer' : ''}
            className='text-blue-500 underline'  // Added underline to make the link more visible
          >
            {modifiedText}
          </a>
        );
      }
    }

    switch (type) {
      case 'heading-two':
        return <h2 key={index} className='text-2xl font-semibold mb-4'>{modifiedText}</h2>;
      case 'heading-three':
        return <h3 key={index} className="text-xl mb-4 font-semibold">{modifiedText}</h3>;
      case 'paragraph':
        return <p key={index} className="text-sm mb-8 text-gray-500">{modifiedText}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-lg mb-4 font-semibold">{modifiedText}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  console.log('Posts content:', posts.content.raw.children);  // Log the raw content

  return (
    <div className='bg-[#14213d]/5 p-4 shadow-lg rounded-lg lg:pb-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-[500px] mb-6'>
        {posts.featuredImage && <img src={posts.featuredImage.url} alt={posts.title} className='absolute h-98 w-full object-fill shadow-lg rounded-t-lg lg:rounded-lg' />}
      </div>
      <div className="px-4 lg:px-0 text-black text-2xl">
        <div className="flex items-center mb-8 w-full justify-between">
          <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 ">
            {posts.author && <img
              alt={posts.author.name}
              height="30px"
              width="30px"
              className="align-middle rounded-full"
              src={posts.author.photo.url}
            />}
            {posts.author && <p className="inline align-middle text-black ml-2 font-medium text-lg">{posts.author.name}</p>}
          </div>
          <div className="font-medium text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-[#fca311]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 002-2V7a2 2 0-00-2-2H5a2 2-00-2 2v12a2 2-002 2z" />
            </svg>
            <span className="align-middle text-sm">{moment(posts.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold text-black">{posts.title}</h1>
        {posts.content && posts.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) => {
            console.log('Processing item:', item);  // Log each item
            return getContentFragment(itemIndex, item.text, item, item.type);
          });

          console.log('Processed children:', children);  // Log the processed children
          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
};

export default PostDetail;
