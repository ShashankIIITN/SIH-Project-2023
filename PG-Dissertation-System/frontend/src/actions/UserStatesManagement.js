import * as api from '../api';
export const startLogin = () => async (dispatch) => {
    try{
        const data = await api.fetchPosts();
        dispatch({type:'stLogin', payload:data})
    }catch (err){
        console.log(err.message)
    }
}
export const setLogin = (open) => (dispatch) => {
    dispatch({ type: "toggleLogin", payload: open });
};
