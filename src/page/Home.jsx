import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { usePosts } from '../hooks/UsePosts';

export const Home = () => {
  const {posts, isLoading, getPosts   } = usePosts();

  useEffect(() => {
    getPosts();
  }, []);
  
  return (
    <main>
      <Hero blogPosts={posts} isLoading={isLoading} />
      <Card blogPosts={posts} isLoading={isLoading} />
    </main>
  );
}
