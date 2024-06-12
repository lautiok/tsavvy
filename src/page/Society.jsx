import React, { useEffect } from "react";
import { Hero } from "../components/Hero";
import { Card } from "../components/Card";
import { usePosts } from "../hooks/UsePosts";

export const Society = () => {
  const { posts, isLoading, getPosts } = usePosts();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const societyPosts = posts.filter((post) => post.labels.includes("Sociedad"));

  return (
    <main>
      <Hero blogPosts={societyPosts} isLoading={isLoading} />
      <Card blogPosts={societyPosts} isLoading={isLoading} />
    </main>
  );
};
