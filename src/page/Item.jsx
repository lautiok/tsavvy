// components/Item.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePosts } from '../hooks/UsePosts';
import loader from '../assets/loader.gif';

export const Item = () => {
  const { id } = useParams();
  const { post, getPost } = usePosts();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        await getPost(id);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchPost();
    window.scrollTo(0, 0); 
  }, []);

  if (isLoading) {
    return <div className='loader'><img src={loader} alt="loader" /></div>;
  }

  if (error) {
    return <div className='error'>Error: {error}</div>;
  }

  const extractImageSrc = (content) => {
    const match = content.match(/<img.*?src="(.*?)"/);
    return match ? match[1] : 'default-image.jpg';
  };

  return (
    <div className='item'>
      <div className="item-container" key={post.id}>
        <div className="item-header">
          <div className="item-category">
            <p>{post.labels ? post.labels[0] : 'Uncategorized'}</p>
          </div>
          <h1 className="item-title">{post.title}</h1>
          <p className="item-author">By {post.author.displayName}</p>
        </div>
        <div className="item-img">
          <img 
            src={extractImageSrc(post.content)} 
            alt={post.title} 
          />
        </div>
        <div className="item-content">
          <p>{post.content.replace(/<[^>]+>/g, '')}</p>
        </div>
        <p className="item-fecha">{new Date(post.published).toLocaleDateString()}</p>
      </div>
    </div>
  );
};
