import axios from "axios";

const IDBLOG = import.meta.env.VITE_ID_BLOG;
const APIKEY = import.meta.env.VITE_APIKEY;
export const fetchBlogPosts = async () => {
    try {
      const { data } = await axios.get(`https://www.googleapis.com/blogger/v3/blogs/${IDBLOG}/posts?key=${APIKEY}`);
      return data;
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return null;
    }
  };

export const fetchBlogPost = async (id) => {
    try {
      const { data } = await axios.get(`https://www.googleapis.com/blogger/v3/blogs/${IDBLOG}/posts/${id}?key=${APIKEY}`);
      return data;
    } catch (error) {
      console.error("Error fetching blog post:", error);
      return null;
    }
  };
