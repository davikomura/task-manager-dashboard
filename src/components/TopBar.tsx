import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Box from '@mui/material/Box';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#f1f3f4', // Cor de fundo da barra de pesquisa
  '&:hover': {
    backgroundColor: '#e0e0e0', // Cor de fundo ao passar o mouse
  },
  marginLeft: theme.spacing(3),
  width: '50%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  border: '1px solid #ccc', // Adiciona uma borda visível
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
  color: '#000', // Cor do texto na barra de pesquisa
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    backgroundColor: '#fff', // Fundo do input para melhor contraste
  },
}));

export const TopBar = () => {
  return (
    <Box sx={{ display: 'flex' }}> {/* Layout flexível */}
      {/* Simulando espaço da barra lateral */}
      <Box sx={{ width: '250px', flexShrink: 0 }}></Box> 

      {/* AppBar agora é estático para não sobrepor o conteúdo */}
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
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
