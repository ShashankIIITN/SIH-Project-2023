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
    const DissCardData = {
        "title": "",
        "tags": [],
        "author": "Saitama",
        "mentor": "Etherium",
        "date": Date.now()

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