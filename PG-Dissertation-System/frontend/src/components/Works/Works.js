import React, { useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PrimarySearchAppBar from '../AppBar/AppBar'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'

function Works() {
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
        "page": "Works",
        "userID": ""
    }
    return (
        <>
            <PrimarySearchAppBar appdata={navData} />
            <div className='customcont'>
                <Box >

                    <Typography variant="h3" color="initial"> <u>Pending Works</u></Typography>
                </Box>
                <Box >
                    <Typography variant="h3" color="initial"> <u>Recent Works</u></Typography>
                </Box>
            </div>
        </>
    )
}

export default Works