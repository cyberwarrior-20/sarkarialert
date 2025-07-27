import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Latest Post', path: '/latest-post' },
  { label: 'Private Job', path: '/private-job' },
  { label: 'About Us', path: '/about' },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const handleNavigate = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#fff',
        boxShadow: 'none',
        borderBottom: '1px solid #ddd',
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{ color: '#000', fontWeight: 'bold', cursor: 'pointer' }}
          onClick={() => handleNavigate('/')}
        >
          SarkariAlert
        </Typography>

        {isMobile ? (
          <>
            <IconButton onClick={toggleDrawer} edge="start" color="inherit">
              <MenuIcon sx={{ color: 'black' }} />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
              <List sx={{ width: 250 }}>
                {navItems.map(({ label, path }) => (
                  <ListItem button key={label} onClick={() => handleNavigate(path)}>
                    <ListItemText
                      primary={label}
                      primaryTypographyProps={{
                        sx: {
                          backgroundColor: isActive(path) ? '#2d2d34' : 'transparent',
                          color: isActive(path) ? 'white' : 'black',
                          px: 4,
                          py: 1,
                          borderRadius: 1,
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            {navItems.map(({ label, path }) => (
              <Button
                key={label}
                onClick={() => handleNavigate(path)}
                sx={{
                  color: isActive(path) ? 'white' : 'blue',
                  backgroundColor: isActive(path) ? '#2d2d34' : 'transparent',
                  '&:hover': {
                    backgroundColor: isActive(path) ? '#1f1f23' : 'rgba(0,0,0,0.04)',
                  },
                  borderRadius: 1,
                  px: 2,
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
