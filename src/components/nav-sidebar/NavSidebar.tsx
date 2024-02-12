import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { CloseSharp } from '@mui/icons-material';
import DisabledAccordion from '../accordion/Accordion';
import { useDispatch, useSelector } from 'react-redux';
import { OPENVALUE } from '../../redux/slices/containerSlise/containerSlice';
import { FONTSIZE } from '../../redux/slices/fontsizeSlice/fontsizeSlice';
import { TEXTVALUE } from '../../redux/slices/textareaValue';
import { Container1 } from '../../utils/Utils';
import "./NavSidebar.scss"

const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-325px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: -325,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

  const MainPage = () => {
    const dispatch = useDispatch()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [filterOpen, setFilterOpen] = React.useState(false)
  dispatch(OPENVALUE(filterOpen))
  const filterDrawerOpen = () => {
    setFilterOpen(true)

  }
  const filterDrawerClose = () => {
    setFilterOpen(false)

  }

  const handleDrawerOpen = () => {
    setOpen(true);
    
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const fontSize = useSelector((state:any)=>state.fontsize_Data.fontSize)

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar style={{backgroundColor: "#fff", flexDirection: "column", alignItems: "flex-start"} }>
          <div className='nav__bar'>
            <Typography variant="h6" noWrap component="div" flex={1} color={'black'}>
              <Container1>
                <div>
                  Persistent drawer
                  <input type="text" />
                </div>
              </Container1>
            </Typography>
            <IconButton
              color="warning"
              aria-label="open drawer"
              onClick={()=>{
                handleDrawerOpen()
                setFilterOpen(false)
              }}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <IconButton
          onClick={()=>{
            filterDrawerOpen()
            setOpen(false)
          }}
          sx={{ mr: 2, ...(filterOpen && { display: 'none' }) }}
          >
            <CloseSharp/>
            <p>Filter</p>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: 0,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={filterOpen}
      >
        <DrawerHeader>
          <IconButton 
          onClick={filterDrawerClose}
          >
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <h2>Preview</h2>
          <textarea id="text-area-filter" placeholder='Type Something' onChange={(e)=>{
            dispatch(TEXTVALUE(e.target.value))
          }}></textarea>
          <div>
            <label htmlFor="fontSize">{fontSize}</label>
            <input name='fontSize' type="range" min={8} max={300} onChange={
              (e)=>{dispatch(FONTSIZE(e.target.value))
              }
            }/>
          </div>
        </List>
        <Divider />
        <List>
          <h2>Filter</h2>
          <DisabledAccordion/>
        </List>
        <Divider />
      </Drawer>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>      
      {/* <Main open={open}>
        <DrawerHeader />
        <h1>ADMINADMIN</h1>
      </Main> */}
    </Box>
  );
}


export default MainPage