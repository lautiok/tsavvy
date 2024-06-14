import React, { useEffect } from "react";
import { Hero } from "../components/Hero";
import { Card } from "../components/Card";
import { usePosts } from "../hooks/UsePosts";
export const Sport = () => {
    const { posts, isLoading, getPosts } = usePosts();

    useEffect(() => {
      getPosts();
    }, [getPosts]);
  
    const SportPosts = posts.filter((post) => post.labels.includes("Deportes", "deportes"));
  return (
    <main>
    <Hero blogPosts={SportPosts} isLoading={isLoading} />
    <Card blogPosts={SportPosts} isLoading={isLoading} />
  </main>
  )
}
