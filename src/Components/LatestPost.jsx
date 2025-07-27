import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  CardMedia,
  useMediaQuery,
  useTheme,
  Container,
  Stack,
} from '@mui/material';

const jobPosts = [
  {
    title: 'Tata Advance System Recruitment 2025, Diploma BE Btech Hiring',
    date: '9 July 2025',
    image: '/assets/job1.jpg',
    description:
      'Tata Advance System Recruitment 2025: Tata Advance System Limited Gujrat New Recruitment 2025 For On Roll Permanent Job Vacancy Big ...',
  },
  {
    title: 'Agi Greenpac Private Company Job Vacancy 2025',
    date: '8 July 2025',
    image: '/assets/job2.jpg',
    description:
      'Agi Greenpac Private Company Job Vacancy 2025 – AGI Greenpac Limited is a sustainable packaging products company that manufactures and ...',
  },
  {
    title: 'New Holland Tractor Recruitment 2025, ITI New Vacancy',
    date: '6 July 2025',
    image: '/assets/job3.jpg',
    description:
      'New Holland Tractor Recruitment 2025: New Holland Tractor Limited Company Grater Noida Uttar Pradesh New Recruitment For Freshers ITI and ...',
  },
  {
    title: 'RRB Technician Recruitment 2025, 6238 Post, Last Date 27 July 2025',
    date: '5 July 2025',
    image: '/assets/job4.jpg',
    description:
      'RRB Technician Recruitment 2024: Indian Railway Recruitment Bord के और से Technician JE Junior Engineer के पद के लिए आवेदन ...',
  },
  {
    title: 'LYfius Pharma Ltd Walk in interview 2025, Pharma Job Alert',
    date: '4 July 2025',
    image: '/assets/job5.jpg',
    description:
      'LYfius Pharma Ltd Walk in interview 2025 – Walk-in Drive Alert! Your Next Career Move Starts Here. Are you looking ...',
  },
  {
    title: 'Zydus Life Science Recruitment 2025, walk in interview ITI, Diploma Pass',
    date: '4 July 2025',
    image: '/assets/job6.jpg',
    description:
      'Zydus Life Science Recruitment 2025: All you students are informed. Campus placement will be organized for ITI and Diploma passed ...',
  },
];

const JobPostList = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Stack spacing={6}>
        {jobPosts.map((post, idx) => (
          <Box key={idx}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                fontSize: isMobile ? '1.2rem' : '1.5rem',
                color: '#0b1e39',
              }}
            >
              {post.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                mt: 0.5,
                mb: 2,
                fontSize: '0.9rem',
                color: '#555',
              }}
            >
              {post.date}
            </Typography>

            <Grid
              container
              spacing={3}
              alignItems="flex-start"
              direction={isMobile ? 'column' : 'row'}
            >
              <Grid item xs={12} md={4}>
                <CardMedia
                  component="img"
                  image={post.image}
                  alt={post.title}
                  sx={{
                    width: '100%',
                    height: 180,
                    objectFit: 'cover',
                    borderRadius: 2,
                  }}
                />
              </Grid>

              <Grid item xs={12} md={8}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1rem',
                    color: '#333',
                    mb: 2,
                    lineHeight: 1.7,
                  }}
                >
                  {post.description}
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#1c1c1c',
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 500,
                    px: 3,
                    py: 1,
                    borderRadius: 0,
                    '&:hover': {
                      backgroundColor: '#000',
                    },
                  }}
                >
                  Read more
                </Button>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default JobPostList;
