import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

const emails = ['Notification 1', 'Notification 2'];

export default function SimpleDialog(props) {
//   const { onClose, selectedValue, open } = props;

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleListItemClick = (value) => {
    setOpen(value);
  };

  props.handler.open = handleOpen;
  props.handler.close = handleClose;

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle alignSelf={'center'}>Notifications</DialogTitle>
      <List sx={{ pt: 0, paddingLeft:'2rem', paddingRight:'2rem' }}>
        {emails.map((email) => (
          <ListItem disableGutters key={email}>
            <ListItemButton onClick={() => handleListItemClick(false)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PriorityHighIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick(false)}
          >
            <Button variant='outlined' sx={{margin:'auto'}}>
              Show All
            </Button>
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}
