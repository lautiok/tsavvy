import React, { useEffect } from "react";
import { Hero } from "../components/Hero";
import { Card } from "../components/Card";
import { usePosts } from "../hooks/UsePosts";
export const Beauty = () => {
    const { posts, isLoading, getPosts } = usePosts();

    useEffect(() => {
      getPosts();
    }, [getPosts]);
  
    const beautyPosts = posts.filter((post) => post.labels.includes("Belleza", "Belleza"));
  return (
    <main>
    <Hero blogPosts={beautyPosts} isLoading={isLoading} />
    <Card blogPosts={beautyPosts} isLoading={isLoading} />
  </main>
  )
}
