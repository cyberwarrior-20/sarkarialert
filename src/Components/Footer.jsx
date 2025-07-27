import React from 'react';
import { Box, Grid, Typography, Link, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ bgcolor: '#f9f9f9', py: 4, px: 2 }}>
      <Grid container spacing={4} justifyContent="space-between">
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ color: '#2c3e50', fontWeight: 'bold' }}>
            About Me
          </Typography>
          <Typography sx={{ mt: 1, color: '#333' }}>
            Hy I am Jayant from MP. I created this website only for sarkari alert and education purpose.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" alignItems={isMobile ? 'flex-start' : 'flex-end'}>
            <Link href="#" underline="hover" sx={{ mb: 0.5 }}>
              (no title)
            </Link>
            <Link href="#" underline="hover" sx={{ mb: 0.5 }}>
              About Us
            </Link>
            <Link href="#" underline="hover" sx={{ mb: 0.5 }}>
              Contact Us ( हमें संदेश भेजें )
            </Link>
            <Link href="#" underline="hover" sx={{ mb: 0.5 }}>
              Disclaimer
            </Link>
            <Link href="#" underline="hover" sx={{ mb: 0.5 }}>
              Privacy Policy
            </Link>
            <Link href="#" underline="hover">
              Terms and Conditions
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Box textAlign="center" sx={{ pt: 4, fontSize: 14, color: '#333' }}>
        © {currentYear} All Copyright • With{' '}
        <Link href="https://www.mysarkarialert.com" target="_blank" rel="noopener" sx={{ color: '#007bff' }}>
          Mysarkarialert.com
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
