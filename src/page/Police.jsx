import React, { useEffect } from "react";
import { Hero } from "../components/Hero";
import { Card } from "../components/Card";
import { usePosts } from "../hooks/UsePosts";


export const Police = () => {
    const { posts, isLoading, getPosts } = usePosts();

    useEffect(() => {
      getPosts();
    }, [getPosts]);
  
    const PolicyPosts = posts.filter((post) => post.labels.includes("Policy"));
  
  return (
    <main>
      <Hero blogPosts={PolicyPosts} isLoading={isLoading} />
      <Card blogPosts={PolicyPosts} isLoading={isLoading} />
    </main>
  )
}
