import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PrimarySearchAppBar from '../AppBar/AppBar'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'

function Sponsorship() {
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