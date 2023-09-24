import * as React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { setLogin } from '../../actions/UserStatesManagement';
import SideBar from '../SideBar/SideBar';
import Fade from '@mui/material/Fade';
import SimpleDialog from './NotificationDialogBox';
import { AccordionDetails, AccordionSummary, Container} from '@mui/material';
import Searcbar from '../Searchbar/Searchbar';
import '../../App.css'
import Searchbar from '../Searchbar/Searchbar';
import RegisterModal from '../RegisterModal/RegisterModal';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Sidebarstate = useSelector(state => state.Sidebarstate);

  const [anchorEl, setAnchorEl] = useState(null);
  const isLoggedin = useSelector(state => state.isLoggedin);
  const [isRegWinOpen, setisRegWinOpen] = useState(false);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  }
  const handleLogin = () => {
    dispatch(setLogin(true));
  }
  const handleLogout = () => {
    dispatch(setLogin(false));
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };


  const DropdownHandler = {
    open: null,
    close: null
  }




  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const [sidebarstate, setSideBarState] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setSideBarState(open);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      id="fade-menu"
      MenuListProps={{
        'aria-labelledby': 'fade-button',
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      TransitionComponent={Fade}
    >
      {/* {isLoggedin && <>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={() => navigate('/dashboard')}>Dashboard</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </>}
      {
        !isLoggedin && <>
          <MenuItem onClick={handleClose}>Register</MenuItem>
          <MenuItem onClick={handleLogin}>Login</MenuItem>
        </>
      } */}
      {isLoggedin ? [
        { name: "Profile", handler: () => navigate('/profile') },
        { name: "History", handler: ()=> navigate('/history') },
        { name: "Saved", handler: ()=> navigate('/saved') },
        { name: "Sponsorship", handler: ()=> navigate('/sponsorship') },
        { name: "Works", handler: ()=>navigate('/works')},
        { name: "Dashboard", handler: () => navigate('/dashboard') },
        { name: "Logout", handler: handleLogout }
      ].map((elements) =>
        props.appdata.page !== elements.name && <MenuItem onClick={elements.handler} key={elements.name}>{elements.name}</MenuItem>
      ) :
        [
          { name: "Register", handler: ()=>setisRegWinOpen(true) },
          { name: "Login", handler: handleLogin }
        ].map((elements) =>
          <MenuItem onClick={elements.handler} key={elements.name}>{elements.name}</MenuItem>
        )
      }
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p onClick={() => DropdownHandler.open()}>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  let anchor = 'left';
  return (
    <>
    <Container sx={{zIndex:100, position:'absolute' , left:'8%',top:'0.5%'}}><Searcbar ></Searcbar></Container>
      <Box sx={{ flexGrow: 1 }}>

        <AppBar position="static" sx={{maxHeight:'4rem'}}>
          <Toolbar>
            <IconButton onClick={toggleDrawer('left', true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              {props.appdata.name}
            </Typography>
            {/* <Searchbar /> */}
            {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          {/* <Searcbar/> */}
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon onClick={() => DropdownHandler.open()} />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Box sx={{ display: 'flex', gap: '.2rem' }} >
                  <AccountCircle />
                  <Typography variant="subtitle1" color="Primary">{props.appdata.user}</Typography>
                </Box>
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      <SideBar statesideBar={sidebarstate} setSideBarState={setSideBarState} sidebartoggle={toggleDrawer} />
      {/* <SimpleDialog
        selectedValue={null}
        open={openMsgDrop}
        onClose={closeMsgDrop}
      /> */}
      <SimpleDialog

        handler={DropdownHandler}
      />
      <RegisterModal state={isRegWinOpen} setRegWindow = {setisRegWinOpen}/>
    </>
  );
}