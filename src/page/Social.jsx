import React, { useEffect } from "react";
import { Hero } from "../components/Hero";
import { Card } from "../components/Card";
import { usePosts } from "../hooks/UsePosts";

export const Social = () => {
    const { posts, isLoading, getPosts } = usePosts();

    useEffect(() => {
      getPosts();
    }, [getPosts]);
  
    const socialPosts = posts.filter((post) => post.labels.includes("Redes", "redes"));
  
  return (
    <main>
    <Hero blogPosts={socialPosts} isLoading={isLoading} />
    <Card blogPosts={socialPosts} isLoading={isLoading} />
  </main>
  )
}
