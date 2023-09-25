import React, { useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PrimarySearchAppBar from '../AppBar/AppBar'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import FullWidthTabs from '../TabMenu/WorksTabs/TabPanel'

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
               <FullWidthTabs />
            </div>
        </>
    )
}

export default Works