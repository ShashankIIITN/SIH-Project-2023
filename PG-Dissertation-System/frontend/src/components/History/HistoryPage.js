import React, { useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PrimarySearchAppBar from '../AppBar/AppBar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'

function HistoryPage() {
    const {isLoggedin} = useSelector(state=>state)
    const navigate = useNavigate();
    useEffect(() => {
        if(!isLoggedin)
        {
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
        <div>
            <PrimarySearchAppBar appdata={navData} />
            <Box marginTop={2} marginLeft={2}>
                    <Typography variant="h5" color="initial">Recent Reads</Typography>
            </Box>
        </div>
    )
}

export default HistoryPage