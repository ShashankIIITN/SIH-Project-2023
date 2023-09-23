export default (state = false, action) => {
    switch (action.type) {
        case 'toggleLogin':
            console.log("works")
            return action.payload;
        case 'CREATE':
            return state;
        default:
            return state;
    }
}