import {useContext} from "react";
import {PostsContext} from "../context/PostsContext";


export const usePosts = () => {
    const post = useContext(PostsContext);

    if (post === undefined) {
        throw new Error('usePosts must be used within a PostsProvider');
    }

    return post
}