import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { ButtonGroup, Container } from '@mui/material';
import ExtMentCard from './ExternalMentCards';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    paddingBottom: '.5rem',
    alignItems: 'center',
};

export default function TransitionsModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div>
                            <Typography id="transition-modal-title" variant="h6" component="h2" >
                                <IconButton aria-label="delete" size='large' >
                                    <AddIcon fontSize="inherit" className='border bg-body-tertiary' />
                                </IconButton>
                                External Mentors
                            </Typography>
                        </div>
                        <ExtMentCard />

                        <Container  sx={{display:'flex', justifyContent:'center', gap:'2rem',marginTop:'.5rem', flexWrap:'wrap' }}>
                            <Button variant="outlined" color='success' >
                                Approve
                            </Button>
                            <Button variant="outlined" color='error' >
                                Reject
                            </Button>
                        </Container>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}