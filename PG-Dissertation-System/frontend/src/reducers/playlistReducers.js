const date = new Date()
const cardData =  [{
    "title": "Understanding voices through deep learning",
    "tags": ['AI', 'ML', 'Deep Learning', 'Nural Network'],
    "author": "Saitama",
    "mentor": "Etherium",
    "ID": '1',
    "date": date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()

}, {
    "title": "Understanding voices through deep learning",
    "tags": ['AI', 'ML', 'Deep Learning', 'Nural Network'],
    "author": "Saitama",
    "mentor": "Etherium",
    "ID": '2',
    "date": date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()

}, {
    "title": "Understanding voices through deep learning",
    "tags": ['AI', 'ML', 'Deep Learning', 'Nural Network'],
    "author": "Saitama",
    "mentor": "Etherium",
    "ID": '3',
    "date": date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()

}]

const playlists = {
    playdata: [{

        "name": "My saved",
        "cardData": cardData

    },
    {

        "name": "My favs",
        "cardData": cardData

    },
    {

        "name": "Ai Domain",
        "cardData": cardData

    },
    {

        "name": "Medical Domain",
        "cardData": cardData

    }],

    selectedPlaylist : []


}

export default (state = playlists, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return { ...state, playdata: action.payload };
        case 'SELECTED':
            return { ...state, selectedPlaylist: action.payload };
        default:
            return state;
    }
}
