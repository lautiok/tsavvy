import React from "react";
import { Link } from "react-router-dom";


export const Card = ({ blogPosts, isLoading }) => {
  return (
    <div className="card-hero-container">
      {isLoading && <p></p>}
      {!isLoading && blogPosts.length > 0 ? (
        blogPosts.slice(2, 11).map((post) => (
          <div className="card-item" key={post.id}>
            <div className="card-img-item">
              <Link to={`/item/${post.id}`}>
                <img 
                  src={
                    post.content.match(/<img.*?src="(.*?)"/)
                      ? post.content.match(/<img.*?src="(.*?)"/)[1]
                      : 'default-image.jpg'
                  } 
                  alt="hero" 
                />
              </Link>
            </div>
            <div className="card-info-item">
              <div className="card-category-item">
                <p>{post.labels ? post.labels[0] : 'Uncategorized'}</p>
                <Link className="card-link-item" to={`/item/${post.id}`}>Read More</Link>
              </div>
              <h2 className="card-title-item">{post.title}</h2>
              <p className="card-description-item">
                {post.content.replace(/<[^>]+>/g, '').substring(0, 100)}...
              </p>
              <p className="card-fecha-item">{new Date(post.published).toLocaleDateString()}</p>
            </div>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};
