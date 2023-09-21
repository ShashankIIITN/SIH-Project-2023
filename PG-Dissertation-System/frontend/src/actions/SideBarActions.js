export const toggleDrawer = (anchor, open) => (dispatch) => {
    dispatch({ type: "ToggleSideBar", payload: open });
};
