import * as api from '../api';
export const startLogin = (email,pwd) => async (dispatch) => {
    try{
        const data = await api.LoginUser(email,pwd);
        console.log(JSON.stringify(data));
        dispatch({type:'stLogin', payload:data})
    }catch (err){
        console.log(err.message)
    }
}
export const setLogin = (open) => (dispatch) => {
    dispatch({ type: "toggleLogin", payload: open });
};
