import axios from "axios";
const URL = "http://localhost:5000/";


export const fetchPosts = () => axios.get(URL);
export const LoginUser = (email, pwd) => axios.post(URL + "users/auth/login",
    JSON.stringify({ userEmail: email, userPwd: pwd }),
    {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
    });
// .catch((err) => console.log(err.message));
export const createPost = (newPost) => axios.post(URL + "create", newPost);