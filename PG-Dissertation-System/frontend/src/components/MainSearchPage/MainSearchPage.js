import React from 'react'
import PrimarySearchAppBar from '../AppBar/AppBar'
import MatExtModal from '../MaterialExtModal/MatExtModal'
import DissertationCard from '../DissertationCard/DissertationCard';
import { Box, Typography, Container, styled } from '@mui/material';
import { useSelector } from 'react-redux';
const date = new Date();

// const ScrollBox = styled(Box)(()=>({
//     border:'2px solid red',
//     height:'90vh',
//     overflow:'auto'
// }));

function MainSearchPage(props) {
    const recDissCardData = useSelector(state => state.dissertations.recentDisserts)
    const prefDissCardData = useSelector(state => state.dissertations.prefDisserts)
    console.log("asda")
    console.log(recDissCardData);

    const { isLoggedin } = useSelector(state => state);
    const navData = {
        "name": "MyApp",
        "user": "Smit",
        "page": "MainPage",
        "userID": ""
    }

    const modData = {
        "name": "External Mentors",
    }
    return (
        <>
            <PrimarySearchAppBar appdata={navData} />
            <Container maxWidth="lg" className={'overflowdiv'} component={'div'} disableGutters sx={{ textAlign: 'center', paddingTop: 2 }}>
                {!isLoggedin ? <Box>
                    <Typography variant="h4" color="initial"><u>Recent Updates</u></Typography>
                    {recDissCardData.map((carddata) => {
                        return <DissertationCard key={carddata.ID} CardData={carddata} />
                    })}
                </Box>
                    : <Box>
                        <Typography variant="h4" color="initial"><u>Your Preferences</u></Typography>
                        {prefDissCardData.map((carddata) => {
                            return <DissertationCard key={carddata.ID} CardData={carddata} />
                        })}
                    </Box>}
            </Container>
            <MatExtModal />
        </>


    )
}

export default MainSearchPage