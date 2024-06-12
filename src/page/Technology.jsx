import React, { useEffect } from "react";
import { Hero } from "../components/Hero";
import { Card } from "../components/Card";
import { usePosts } from "../hooks/UsePosts";


export const Technology = () => {
    const { posts, isLoading, getPosts } = usePosts();

    useEffect(() => {
      getPosts();
    }, [getPosts]);
  
    const technologyPosts = posts.filter((post) => post.labels.includes("Tecnologia"));
  
  return (
    <main>
            <Hero blogPosts={technologyPosts} isLoading={isLoading} />
            <Card blogPosts={technologyPosts} isLoading={isLoading} />
        </main>
  )
}
