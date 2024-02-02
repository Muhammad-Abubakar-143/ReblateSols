import React, { useEffect, useState } from 'react'
import { getComments } from '../services';

const Comments = ( { slug }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const GetComments = async () => {
      try {
        const result = await request(graphqlAPI, getComments, { slug });
        setComments(result.comments);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    GetComments();
  }, [slug]);

  // useEffect(() => {
  //   getComments(slug).then((result) => {
  //     setComments(result);
  //   });
  // }, []);
  return (
    <>
    {comments.length > 0 && (
      <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">
          {comments.length}

          Comments
        </h3>
          {comments.map((comment, index) => (
            <div key={index} className="border-b border-gray-100 mb-4 pb-4">
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span>
                {' '}
                on
                {' '}
                {moment(comment.createdAt).format('MMM DD, YYYY')}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">{parse(comment.comment)}</p>
            </div>
          ))}
      </div>
    )}
  </>
  )
}

export default Comments