export default (state = false, action) => {
    switch (action.type) {
        case 'ToggleSideBar':
            console.log("works")
            return state^action.payload;
        case 'CREATE':
            return state;
        default:
            return state;
    }
}