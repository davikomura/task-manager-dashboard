import { Link } from "react-router-dom";
import { Drawer, List, ListItemButton, ListItemText, ListItemIcon, Avatar, Divider, Box, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';

export const Header = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 250, // Aumenta a largura para um layout mais espaçoso
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 250,
          boxSizing: "border-box",
          backgroundColor: "#f0f4f8", // Cor de fundo mais suave
        },
      }}
    >
      <Box sx={{ padding: 2, textAlign: 'center' }}>
        <Typography variant="h5" component="div" fontWeight="bold" color="primary">
          Task Manager
        </Typography>
      </Box>
      <Divider />
      <List>
        {/* Link para Home */}
        <ListItemButton component="a" href="/" sx={{ "&:hover": { backgroundColor: "#e3f2fd" } }}>
          <ListItemIcon>
            <HomeIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

        {/* Link para Tasks */}
        <ListItemButton component={Link} to="/tasks" sx={{ "&:hover": { backgroundColor: "#e3f2fd" } }}>
          <ListItemIcon>
            <AssignmentIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItemButton>

        {/* Link para Team */}
        <ListItemButton component={Link} to="/team" sx={{ "&:hover": { backgroundColor: "#e3f2fd" } }}>
          <ListItemIcon>
            <GroupIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Team" />
        </ListItemButton>

        {/* Link para Settings */}
        <ListItemButton component={Link} to="/settings" sx={{ "&:hover": { backgroundColor: "#e3f2fd" } }}>
          <ListItemIcon>
            <SettingsIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
      <Divider />
      <Box
        sx={{
          mt: "auto",
          mb: 2,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            backgroundColor: "#e3f2fd",
          },
          transition: "background-color 0.3s ease",
        }}
        component={Link}
        to="/profile"
      >
        <Avatar
          alt="Andrew Simon"
          src="https://via.placeholder.com/40"
          sx={{ width: 50, height: 50, mr: 2, boxShadow: 3 }}
        />
        <Box>
          <Typography variant="body1" fontWeight="bold" color="textPrimary">
            Andrew Simon
          </Typography>
          <Typography variant="body2" color="textSecondary">
            andreww@gmail.com
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};
