import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import PrimarySearchAppBar from '../AppBar/AppBar'

import Paper from '@mui/material/Paper';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WorkIcon from '@mui/icons-material/Work';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ScienceIcon from '@mui/icons-material/Science';


export default function ProfilePage(props) {
    const { isLoggedin } = useSelector(state => state)
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedin) {
            navigate('/');
        }
    }, [isLoggedin])

    const navData = {
        "name": "MyApp",
        "user": "Author",
        "page": "Profile",
        "userID": ""
    }
    const modData = {
        "name": "External Mentors",
    }
    return (
        <Box >
            <PrimarySearchAppBar appdata={navData} />
            <ProfileBody />
        </Box>
    )
}


function ProfileBody(props) {
    return (
        <Box sx={{
            display: 'flex',
            margin: 'auto',
            justifyContent: 'center',
            alignContent: 'center',
            bgcolor: 'aliceblue',
            minHeight: '92vh'
        }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignSelf: 'center',
                    width: '80%',
                    padding: '4rem',
                    borderRadius: '1rem',
                    minHeight: '30rem',
                    bgcolor: 'lightblue'
                }}
            >
                <Paper
                    sx={{
                        margin: 'auto',
                        bgcolor: 'white',
                        padding: '3rem',
                        borderRadius: '100rem',
                        color: '#555555',

                    }}
                    elevation='5'
                >

                    <AccountCircleIcon sx={{ fontSize: '10rem', color: '#cccccc' }} />

                    <Typography variant='h4' sx={{color: 'black'}}>
                        Raj Sharma
                    </Typography>

                    <Typography variant='body2' component="div">
                        Joined 5 months ago
                    </Typography>

                    <Typography 
                        variant='body1' 
                        component="div" 
                        sx={{fontWeight: '500', color:'black', marginTop: '2rem' }}
                    >
                        RajSharma@gmail.com <br />
                        8572850285 <br />
                        Pune, India
                    </Typography>
                </Paper>


                <Paper
                    sx={{
                        minWidth: 'min(80%, 40rem)',
                        borderRadius: '1rem',
                        marginRight: '5rem'
                    }}
                >
                    <List> {[
                        {field: 'Name', value: 'Raj Sharma', icon: <AccountCircleIcon />, },
                        {field: 'Position', value: 'PG Student', icon: <WorkIcon />, },
                        {field: 'Field', value: 'Computer Science', icon: <ScienceIcon />, },
                        {field: 'Institute', value: 'IISER Pune', icon: <AccountBalanceIcon />, },
                        {field: 'Phone', value: '8572850285', icon: <PhoneIcon />, },
                        {field: 'Email', value: 'RajSharma@gmail.com', icon: <EmailIcon />, },
                    ].map((row) =>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        {row.icon}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={row.field} secondary={row.value} />

                                <EditIcon />
                            </ListItem>
                        )
                    }
                    </List>
                </Paper>

            </Box>
        </Box>
    );
}
