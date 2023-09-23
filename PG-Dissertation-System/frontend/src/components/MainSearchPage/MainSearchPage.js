import React from 'react'
import PrimarySearchAppBar from '../AppBar/AppBar'
import MatExtModal from '../MaterialExtModal/MatExtModal'
import DissertationCard from '../DissertationCard/DissertationCard';
import { Box } from '@mui/material';
const date = new Date();

const DissCardData = [{
    "title": "Understanding voices through deep learning",
    "tags": ['AI', 'ML', 'Deep Learning', 'Nural Network'],
    "author": "Saitama",
    "mentor": "Etherium",
    "ID":'1',
    "date": date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()

}, {
    "title": "Understanding voices through deep learning",
    "tags": ['AI', 'ML', 'Deep Learning', 'Nural Network'],
    "author": "Saitama",
    "mentor": "Etherium",
    "ID":'2',
    "date": date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()

}, {
    "title": "Understanding voices through deep learning",
    "tags": ['AI', 'ML', 'Deep Learning', 'Nural Network'],
    "author": "Saitama",
    "mentor": "Etherium",
    "ID":'3',
    "date": date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()

}];
function MainSearchPage() {
    const navData = {
        "name": "MyApp",
        "user": "None",
        "page": "MainPage",
        "userID": ""
    }

    const modData = {
        "name": "External Mentors",
    }
    return (
        <>
            <PrimarySearchAppBar appdata={navData} />
            <Box >
                {DissCardData.map((carddata) => {

                    return <DissertationCard key={carddata.ID} CardData={carddata} />
                })}
            </Box>
            {/* <ExtModal moddata={modData} /> */}
            <MatExtModal />
        </>


    )
}

export default MainSearchPage