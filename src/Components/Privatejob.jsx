import React from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const privateJobs = [
  {
    title: 'Infosys Systems Engineer Hiring – Freshers Eligible – PAN India',
    date: '27 July 2025',
    image: '/images/infosys.jpg',
    description:
      'Infosys is hiring Systems Engineers for PAN India locations. Freshers with B.E/B.Tech/MCA are eligible.',
  },
  {
    title: 'HCL Technologies Off Campus Drive 2025 – Analyst Role',
    date: '26 July 2025',
    image: '/images/hcl.jpg',
    description:
      'HCL is conducting off-campus recruitment for Analyst roles in Noida, Chennai, and Bengaluru.',
  },
  {
    title: 'Wipro Turbo Hiring 2025 – Project Engineer Role',
    date: '25 July 2025',
    image: '/images/wipro.jpg',
    description:
      'Wipro has announced Turbo Hiring 2025 for the role of Project Engineer. B.Tech/BE all streams can apply.',
  },
  {
    title: 'L&T Construction Hiring Diploma Trainees – Apply Now',
    date: '24 July 2025',
    image: '/images/lnt.jpg',
    description:
      'L&T Construction is looking for Diploma Trainees across civil, electrical, and mechanical disciplines.',
  },
  {
    title: 'Tech Mahindra Hiring Customer Support Associates – Work from Home',
    date: '23 July 2025',
    image: '/images/techmahindra.jpg',
    description:
      'Tech Mahindra is hiring for voice and non-voice support roles with remote options for graduates in any discipline.',
  },
  {
    title: 'TCS NQT Hiring 2025 – National Qualifier Test for Freshers',
    date: '22 July 2025',
    image: '/images/tcs.jpg',
    description:
      'TCS National Qualifier Test is now open for 2025 batch graduates. B.Sc, B.Com, B.E/B.Tech eligible.',
  },
  {
    title: 'Cognizant GenC & GenC Elevate Drive – Freshers Hiring',
    date: '21 July 2025',
    image: '/images/cognizant.jpg',
    description:
      'Cognizant is hiring for both GenC and GenC Elevate profiles. Apply now for multiple locations across India.',
  },
  {
    title: 'Accenture Off Campus Hiring – Associate Software Engineer Role',
    date: '20 July 2025',
    image: '/images/accenture.jpg',
    description:
      'Accenture invites applications for Associate Software Engineer positions from recent graduates.',
  },
];

const PrivateJob = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ p: 2, maxWidth: '1200px', mx: 'auto' }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Latest Private Jobs - 2025
      </Typography>

      <Grid container spacing={4}>
        {privateJobs.map((job, index) => (
          <Grid item xs={12} key={index}>
            <Card
              elevation={0}
              sx={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                borderRadius: 3,
               
              }}
            >
              <CardMedia
                component="img"
                image={job.image}
                alt={job.title}
                sx={{
                  width: isMobile ? '100%' : 280,
                  height: isMobile ? 180 : 'auto',
                  objectFit: 'cover',
                  borderRadius: isMobile ? '12px 12px 0 0' : '12px 0 0 12px',
                }}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, p: 2 }}>
                <CardContent sx={{ padding: 0 }}>
                  <Typography variant="h6" fontWeight="bold">
                    {job.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    Posted on: {job.date}
                  </Typography>
                  <Typography variant="body1" mt={1}>
                    {job.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      bgcolor: '#1976d2',
                      '&:hover': { bgcolor: '#125ea5' },
                      width: 'fit-content',
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PrivateJob;
