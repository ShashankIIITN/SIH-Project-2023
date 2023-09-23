import React, {useEffect} from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Autocomplete from '@mui/material/Autocomplete';

import Modal from '@mui/material/Modal';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


import PrimarySearchAppBar from '../AppBar/AppBar'
import { maxWidth } from '@mui/system';


//we assume user items

const tagOptions = [
    "Machine Learning",
    "Generating Functions",
    "Madness",
];



export default function ProfilePage(props) {
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
        "user":"Author",
        "page":"Profile",
        "userID":""
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

function ProfileBody({closeAction}) {
      return (
        <Box sx={{ display:'flex',margin:'auto',justifyContent:'center', alignContent:'center',bgcolor: 'grey',height:'89vh'}}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    alignSelf:'center',
                    maxWidth: '30em',
                    bgcolor:'white',
                    paddingLeft:'2rem',
                    paddingRight:'2rem',
                    height:'80%'
                }}
            >
                <Box sx={{
                    alignSelf: 'stretch',
                    display: 'inline-flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
                >
                    <Typography variant='h3'
                        sx={{ flex: '10', textAlign: 'center', marginLeft:'0.5em'}}
                    >
                        Profile
                    </Typography>
                    
                </Box>

                <Grid container
                    spacing={2}
                    rowSpacing={3}
                    sx={{ 
                        marginTop: "1em", 
                        marginBottom: "2em",
                    }}
                >
                    <Grid item sm={2} xs={12}>
                        <Typography>
                            Name
                        </Typography>
                    </Grid>

                    <Grid item sm={10} xs={12}>
                        <Typography> 
                            ABC XYZ
                        </Typography>
                    </Grid>

                    <Grid item sm={2} xs={12}>
                        <Typography>
                            Email
                        </Typography>
                    </Grid>

                    <Grid item sm={10} xs={12}>
                        <Typography>
                            pqr@gmail.com
                        </Typography>
                    </Grid>

                   <Grid item sm={2} xs={12}>
                        <Typography>
                            Institute
                        </Typography>
                    </Grid>

                    <Grid item sm={10} xs={12}>
                        <Typography>
                            None
                        </Typography>
                    </Grid>

                </Grid>

                <Box sx={{ alignSelf: 'stretch', textAlign: 'center' }}>
                    <Autocomplete
                        multiple
                        id="tags-outlined"
                        options={tagOptions}
                        //getOptionLabel={(option) => option}
                        //defaultValue={[top100Films[13]]}
                        filterSelectedOptions
                        renderInput={(params) => (
                            <TextField
                                sx={{ minWidth: 'min(90%, 30em)', maxWidth: '30em' }}
                                {...params}
                                label="Your interests"
                                placeholder="Favorites"
                            />
                        )}
                    />
                </Box>

                <Button
                    variant='contained'
                    sx={{ minWidth: 'min(100%, 20em)', height: '3.5em', marginTop: '2em' }}
                >
                    Link With Institute
                </Button>

            </Box>
        </Box>
    );
}