import moment from 'moment';
import React from 'react'

const PostDetail = ({posts}) => {
  
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b className='text-gray-900' key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em className='text-gray-900' key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u className='text-gray-900' key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three text-black':
        return <h3 key={index} className="text-xl font-semibold mb-4 text-gray-500">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8 text-gray-500">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4 text-gray-500">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
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
  return (
    <div className='bg-[#14213d]/5 p-4 shadow-lg rounded-lg lg:pb-8 pb-12 mb-8'>
     <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        {posts.featuredImage && <img src={posts.featuredImage.url} alt={posts.title} className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg' />}
     </div>
     <div className="px-4 lg:px-0 text-black">
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle">{moment(posts.createdAt).format('MMM DD, YYYY')}</span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold text-black">{posts.title}</h1>
          {posts.content && posts.content.raw.children.map((typeObj, index) => {
  const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

  return getContentFragment(index, children, typeObj, typeObj.type);
})}

        </div>
    </div>
  )
}

export default PostDetail
