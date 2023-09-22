import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar, Container, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SupportIcon from '@mui/icons-material/Support';

let ellist = [<InboxIcon/>,<SupportIcon/>, <MenuBookIcon/>, <MailIcon />]

export default function SideBar(props) {
    let anchor = "left";
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={props.sidebartoggle(anchor, false)}
            onKeyDown={props.sidebartoggle(anchor, false)}
        >
            <Container >
                <List sx={{display:'flex', alignItems:'center', gap:'1rem'}}>
                    <Avatar />
                    <Typography variant="subtitle1" color="initial">MyApp</Typography>
                </List>
            </Container>
            <Divider />
            <List>
                {['About Us', 'Support', 'Guidlines', 'Contact Us'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {ellist[index]}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key={anchor}>
                <SwipeableDrawer
                    anchor={anchor}
                    open={props.statesideBar}
                    onClose={props.sidebartoggle(anchor, false)}
                    onOpen={props.sidebartoggle(anchor, true)}
                >
                    {list(anchor)}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}