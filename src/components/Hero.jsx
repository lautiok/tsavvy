import React from "react";
import { Link } from "react-router-dom";
import loader from "../assets/loader.gif";
export const Hero = ( {  blogPosts, isLoading  }) => {


  return (
    <>
          {isLoading && <div className="loader"><img src={loader} alt="loader" /></div>}

    <div className="hero">
       {!isLoading && blogPosts.slice(0, 1).map((tec) => (
          <div className="cuadrado" key={tec.id}>
          <div className="img">
          <Link to={`/item/${tec.id}`}>
          <img 
                  src={
                    tec.content.match(/<img.*?src="(.*?)"/)
                      ? tec.content.match(/<img.*?src="(.*?)"/)[1]
                      : 'default-image.jpg'
                  } 
                  alt="hero" 
                />
          </Link>
          </div>
          <div className="info">
            <div className="category-hero">
            <p>{tec.labels ? tec.labels[0] : 'Uncategorized'}</p>
            <Link className="link-hero" to={`/item/${tec.id}`}>Ver mas</Link>
            </div>
            <h2 className="title-hero">{tec.title}</h2>
            <p className="description-hero">
            {tec.content.replace(/<[^>]+>/g, '').substring(0, 100)}...
            </p>
            <p className="fecha">{new Date(tec.published).toLocaleDateString()}</p>
          </div>
        </div>
        ))}
      <div className="card-hero">
        {!isLoading && blogPosts.slice(1, 2).map((post) => (
          <div className="card" key={post.id}>
          <div className="card-img">
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
          <div className="card-info">
            <div className="card-category">
              <p>{post.labels ? post.labels[0] : 'Uncategorized'}</p>
              <Link className="card-link" to={`/item/${post.id}`}>Ver mas</Link>
            </div>
            <h2 className="card-title">{post.title}</h2>
            <p className="card-description">
              {post.content.replace(/<[^>]+>/g, '').substring(0, 100)}...
            </p>
            <p className="card-fecha">{new Date(post.published).toLocaleDateString()}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
    </>
    
  );
};
