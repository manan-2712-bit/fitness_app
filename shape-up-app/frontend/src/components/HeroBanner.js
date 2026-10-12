import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  const location = useLocation();
   return (
  <Box
    sx={{
      mt: { lg: '20px', xs: '40px' },
      ml: { sm: '50px' },
      display: 'flex',
      alignItems: 'center',
      flexDirection: { lg: 'row', xs: 'column' },
      gap: { lg: '40px', xs: '20px' },
    }}
    position="relative"
    p="20px"
  >
    <Box flex="1">
      {/* Brand Subtitle / Accent Text */}
      <Typography
        sx={{
          color: '#2b6cb0',
          fontWeight: '700',
          fontSize: { lg: '24px', xs: '20px' },
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
          mb: '10px',
        }}
      >
        Shape Up
      </Typography>

      {/* Main Catchy Heading */}
      <Typography
        fontWeight={800}
        sx={{
          fontSize: { lg: '48px', xs: '34px' },
          lineHeight: '1.2',
          color: '#1a202c',
          mb: '20px',
        }}
      >
        We are here to help <br />
        you achieve your <br />
        fitness dreams.
      </Typography>

      {/* Modern Redesigned Action Button */}
      <Button
        variant="contained"
        component={Link}
        to="../pages/features"
        sx={{
          backgroundColor: '#2b6cb0',
          color: '#ffffff',
          padding: '12px 32px',
          fontSize: '16px',
          fontWeight: '600',
          borderRadius: '30px',
          textTransform: 'none',
          boxShadow: '0px 4px 14px rgba(43, 108, 176, 0.35)',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#2c5282',
            boxShadow: '0px 6px 20px rgba(43, 108, 176, 0.5)',
            transform: 'translateY(-2px)',
          },
        }}
      >
        What we offer
      </Button>
    </Box>

    {/* Hero Image */}
    <Box flex="1">
      <img
        src={HeroBannerImage}
        alt="hero-banner"
        style={{
          width: '100%',
          maxHeight: '480px',
          objectFit: 'contain',
        }}
      />
    </Box>
  </Box>
);

};

export default HeroBanner;
