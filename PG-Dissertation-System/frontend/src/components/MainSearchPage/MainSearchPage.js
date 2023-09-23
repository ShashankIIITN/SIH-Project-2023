import React from 'react'
import PrimarySearchAppBar from '../AppBar/AppBar'
import MatExtModal from '../MaterialExtModal/MatExtModal'
import DissertationCard from '../DissertationCard/DissertationCard';
import { Box } from '@mui/material';

function MainSearchPage() {
    const navData = {
        "name": "MyApp",
        "user": "None",
        "page": "MainPage",
        "userID": ""
    }
    const date = new Date();
    const DissCardData = {
        "title": "Understanding voices through deep learning",
        "tags": ['AI', 'ML', 'Deep Learning', 'Nural Network'],
        "author": "Saitama",
        "mentor": "Etherium",
        "date": date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()

    };
    const modData = {
        "name": "External Mentors",
    }
    return (
        <>
            <PrimarySearchAppBar appdata={navData} />
            <Box>
                <DissertationCard CardData={DissCardData} />
            </Box>
            {/* <ExtModal moddata={modData} /> */}
            <MatExtModal />
        </>


    )
}

export default MainSearchPage