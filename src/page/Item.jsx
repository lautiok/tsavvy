// components/Item.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePosts } from '../hooks/UsePosts';
import loader from '../assets/loader.gif';

export const Item = () => {
  const { id } = useParams();
  const { post, getPost } = usePosts();
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    const fetchPost = async () => {
        await getPost(id);
        setIsLoading(false);
    }

    fetchPost();
  }, []);

  if (isLoading) {
    return <div className='loader'><img src={loader} alt="loader" /></div>;
  }
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
            src={
              post.content.match(/<img.*?src="(.*?)"/)
                ? post.content.match(/<img.*?src="(.*?)"/)[1]
                : 'default-image.jpg'
            } 
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
