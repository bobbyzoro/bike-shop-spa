// src/components/Navbar.tsx
import React from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Chi Siamo', path: '/chi-siamo' },
  { label: 'Servizi', path: '/servizi' },
  { label: 'Contatti', path: '/contatti' },
];

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Officina 2 Ruote
          </Typography>

          {/* Menu per dispositivi desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map(({ label, path }) => (
              <Button
                key={label}
                component={NavLink}
                to={path}
                sx={{
                  color: 'text.primary',
                  fontWeight: 'bold',
                  '&.active': {
                    color: 'primary.main',
                  },
                  ml: 2,
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* Icona menu mobile */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton onClick={toggleDrawer(true)} edge="end" color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Drawer mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {navItems.map(({ label, path }) => (
              <ListItem key={label} disablePadding>
                <ListItemButton
                  component={NavLink}
                  to={path}
                  sx={{
                    '&.active > .MuiListItemText-root > span': {
                      color: 'primary.main',
                      fontWeight: 'bold',
                    },
                  }}
                >
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>

            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
