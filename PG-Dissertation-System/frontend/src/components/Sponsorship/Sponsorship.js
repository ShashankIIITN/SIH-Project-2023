import React from 'react'
import PrimarySearchAppBar from '../AppBar/AppBar'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'

function Sponsorship() {
    const navData = {
        "name": "MyApp",
        "user": "None",
        "page": "Sponsorship",
        "userID": ""
    }
    return (
        <div>
            <PrimarySearchAppBar appdata={navData} />
            <Box margin={2}>
                <Typography variant="h4" color="initial"><u>Sponsorship Requests</u></Typography>
            </Box>
            <Box marginLeft={2} marginTop={20}>
                <Typography variant="h4" color="initial"><u>Sponsored Dissertations</u></Typography>
            </Box>
        </div>
    )
}

export default Sponsorship