const date = new Date();

const initialState =
{
    searchedDisserts: [],
    historyDisserts: [{
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

    }],
    prefDisserts: [{
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

    }],
    recentDisserts: [{
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
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_DISS':
            return { ...state, searchedDisserts: action.payload };
        case 'READ_HIST_DISS':
            return { ...state, historyDisserts: action.payload };
        case 'PREF_DISS':
            return { ...state, prefDisserts: action.payload };
        case 'RECENT_DISS':
            return { ...state, recentDisserts: action.payload };
        default:
            return state;
    }
}