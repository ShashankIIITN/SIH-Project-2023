import * as React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Autocomplete from '@mui/material/Autocomplete';
import { InputAdornment } from '@mui/material';
import {IconButton} from '@mui/material';
import Modal from '@mui/material/Modal';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    boxShadow: 24,
    borderRadius: 2,
    padding: 2,
};





export default function RegisterModal(props) {
    const open = props.state;
    const setOpen = props.setRegWindow;
    const templog1=props.templogin;
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const templog = () =>templog1();
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <RegisterBody closeAction={handleClose} templog={templog}/>
                </Box>
            </Modal>
        </div>
    );
}

const tagOptions = [
    "Machine Learning",
    "Generating Functions",
    "Madness",
];
function RegisterBody({closeAction,templog}) {
    const [showPassword, setShowPassword] = React.useState(false);
const handleClickShowPassword = () => setShowPassword(!showPassword);
const handleMouseDownPassword = () => setShowPassword(!showPassword);
const [showPassword1, setShowPassword1] = React.useState(false);
const handleClickShowPassword1 = () => setShowPassword1(!showPassword1);
const handleMouseDownPassword1 = () => setShowPassword1(!showPassword1);
    return (
        <Container sx={{ bgcolor: 'white' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
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
                    <Button sx={{flex:'0.5'}} variant="outlined" onClick={closeAction}>
                        <ArrowBackIcon sx={{ fontSize: '2.5em' }} />
                    </Button>
                    <Typography variant='h3'
                        sx={{ flex: '10', textAlign: 'center', marginLeft:'0.5em' }}
                    >
                        Registration
                    </Typography>
                    <Box sx={{flex:'1.5'}}>
                    </Box>
                    
                </Box>

                <Grid container
                    spacing={2}
                    rowSpacing={3}
                    sx={{ marginTop: "1em", marginBottom: "2em" }}
                >
                    <Grid item sm={6} xs={12}>
                        <TextField
                            label="First Name"
                            variant="filled"
                            fullWidth
                        />
                    </Grid>

                    <Grid item sm={6} xs={12}>
                        <TextField
                            label="Last Name"
                            variant="filled"
                            fullWidth
                        />
                    </Grid>

                    <Grid item sm={6} xs={12}>
                        <TextField
                            label="Password"
                            variant="filled"
                            type={showPassword ? "text" : "password"} 
                            InputProps={{ // <-- This is where the toggle button is added.
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={handleClickShowPassword}
                                      onMouseDown={handleMouseDownPassword}
                                    >
                                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                  </InputAdornment>
                                )
                              }}
                            fullWidth
                        />

                    </Grid>

                    <Grid item sm={6} xs={12}>
                        <TextField
                            label="Confirm Password"
                            variant="filled"
                            type={showPassword1 ? "text" : "password"} 
                            InputProps={{ // <-- This is where the toggle button is added.
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={handleClickShowPassword1}
                                      onMouseDown={handleMouseDownPassword1}
                                    >
                                      {showPassword1 ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                  </InputAdornment>
                                )
                              }}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                        <TextField
                            label="Email Address"
                            variant="filled"
                            sx={{ minWidth: 'min(100%, 30em)' }}
                        />
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
                            <TextField variant="standard"
                                sx={{ minWidth: 'min(90%, 30em)', maxWidth: '30em' }}
                                {...params}
                                label="Your interests"
                                placeholder="Favorites"
                            />
                        )}
                    />
                </Box>

                <Button
                    onClick={templog}
                    variant='contained'
                    sx={{ minWidth: 'min(100%, 20em)', height: '3.5em', marginTop: '4em' }}
                >
                    Register
                </Button>

                <Typography variant='body1' sx={{ marginTop: '5px' }}>
                    Already have an account?
                    <Link href='#' sx={{ marginLeft: '5px' }} >
                        Log In
                    </Link>
                </Typography>
            </Box>
        </Container>
    );
}


