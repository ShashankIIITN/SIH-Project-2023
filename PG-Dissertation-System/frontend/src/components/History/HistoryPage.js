import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PrimarySearchAppBar from '../AppBar/AppBar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'
import DissertationCard from '../DissertationCard/DissertationCard'

function HistoryPage() {
    const { isLoggedin } = useSelector(state => state)
    const historyDissCardData = useSelector(state => state.dissertations.historyDisserts)
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedin) {
            navigate('/');
        }
    }, [isLoggedin])

    const navData = {
        "name": "MyApp",
        "user": "None",
        "page": "History",
        "userID": ""
    }
    return (
        <>
            <PrimarySearchAppBar appdata={navData} />
            <Container maxWidth="lg" disableGutters sx={{ textAlign: 'center', paddingTop: 2 }}>
                <Box>
                    <Typography variant="h4" color="initial"><u>Recent Reads</u></Typography>
                    {historyDissCardData.map((carddata) => {
                        return <DissertationCard key={carddata.ID} CardData={carddata} />
                    })}
                </Box>
            </Container>
        </>
    )
}

export default HistoryPage