import React, { useEffect } from "react";
import { Hero } from "../components/Hero";
import { Card } from "../components/Card";
import { usePosts } from "../hooks/UsePosts";

export const Travel = () => {
    const { posts, isLoading, getPosts } = usePosts();
  
    useEffect(() => {
      getPosts();
    }, [getPosts]);
  
    const travelPosts = posts.filter((post) => post.labels.includes("Travel"));
  
  return (
    <main>
    <Hero blogPosts={travelPosts} isLoading={isLoading} />
    <Card blogPosts={travelPosts} isLoading={isLoading} />
  </main>
  )
}
