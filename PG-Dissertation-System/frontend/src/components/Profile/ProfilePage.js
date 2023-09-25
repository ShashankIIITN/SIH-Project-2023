import * as React from 'react';

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
    const navData = {
        "name": "MyApp",
    }
    const modData = {
        "name": "External Mentors",
    }
    return (
        <>
            <PrimarySearchAppBar appdata={navData} />
            <ProfileBody />
        </>
    )
}

function ProfileBody({closeAction}) {
      return (
        <Container sx={{ bgcolor: 'white' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: '30em',
                    margin: 'auto',
                }}
            >
                <Box sx={{
                    alignSelf: 'stretch',
                    display: 'inline-flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: '1em',
                }}
                >
                    <Typography variant='h3'
                        sx={{ flex: '10', textAlign: 'center', marginLeft:'0.5em', marginBottom:'1em'}}
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
                    sx={{ minWidth: 'min(100%, 20em)', height: '3.5em', marginTop: '4em' }}
                >
                    Link With Institute
                </Button>

            </Box>
        </Container>
    );
}