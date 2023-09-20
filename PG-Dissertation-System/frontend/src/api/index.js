import axios from "axios";
const URL = "http://localhost:5000/posts/";


export const fetchPosts = () => axios.get(URL);
// .catch((err) => console.log(err.message));
export const createPost = (newPost) => axios.post(URL+"create", newPost);