import React from 'react'
import PrimarySearchAppBar from '../AppBar/AppBar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'

function HistoryPage() {
    const navData = {
        "name": "MyApp",
        "user": "None",
        "page": "History",
        "userID": ""
    }
    return (
        <div>
            <PrimarySearchAppBar appdata={navData} />
            <Box marginTop={2} marginLeft={2}>
                    <Typography variant="h5" color="initial">Recent Reads</Typography>
            </Box>
        </div>
    )
}

export default HistoryPage