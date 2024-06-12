// context/PostsContext.jsx
import { createContext, useState } from "react";
import { fetchBlogPost, fetchBlogPosts } from "../api/Axios";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({}); // Inicializado como un objeto vacío
    const [isLoading, setIsLoading] = useState(true);

    const getPosts = async () => {
        try {
            const res = await fetchBlogPosts();
            setPosts(res.items);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching blog posts:", error);
        }
    }

    const getPost = async (id) => {
        try {
            const res = await fetchBlogPost(id);
            setPost(res);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching blog post:", error);
        }
    }

    return (
        <PostsContext.Provider value={{
            posts,
            getPosts,
            getPost,
            setPosts,
            post,
            setPost,
            isLoading
        }}>
            {children}
        </PostsContext.Provider>
    );
};
