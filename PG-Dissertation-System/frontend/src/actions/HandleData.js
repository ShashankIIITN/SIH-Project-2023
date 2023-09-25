import * as api from '../api';

export const getDissertations = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        console.log("yaya");
        dispatch({ type: 'SEARCH_DISS', payload: data });
    } catch (err) {
        console.log(err.message);
    }
}   

export const createDissertation = (post)=> async (dispatch) =>{
    try{
        const {data} = await api.createPost(post);

        dispatch({type:"CREATE", payload:data});
    }catch (err){
        console.log(err.message);
    }
}