import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#f1f3f4',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
  marginLeft: theme.spacing(3),
  width: '50%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  border: '1px solid #ccc',
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
  color: '#000',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    backgroundColor: '#fff',
  },
}));

export const TopBar = () => {
  const handleLogout = () => {
    // Função de logout
    console.log("Logout clicked");
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ width: '250px', flexShrink: 0 }}></Box> 

      <AppBar position="relative" sx={{ backgroundColor: '#fff', boxShadow: 1, width: 'calc(100% - 250px)' }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ color: '#4a4a4a' }}>
            Welcome, <span style={{ fontWeight: 'bold', color: '#00d1b2' }}>Andrew Simon</span>
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search here…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box sx={{ marginLeft: 'auto' }}>
            <IconButton size="large" edge="end" color="inherit">
              <NotificationsIcon sx={{ color: '#4a4a4a', '&:hover': { color: '#00d1b2' } }} />
            </IconButton>
            <IconButton size="large" edge="end" color="inherit">
              <HelpOutlineIcon sx={{ color: '#4a4a4a', '&:hover': { color: '#00d1b2' } }} />
            </IconButton>
            <IconButton size="large" edge="end" color="inherit" onClick={handleLogout}>
              <Link to="/Login"><LogoutIcon sx={{ color: '#4a4a4a', '&:hover': { color: '#00d1b2' } }} /></Link>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
