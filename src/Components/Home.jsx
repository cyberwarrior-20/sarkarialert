import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,

  Stack,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BannerIntro from './Bannerinfo'; // Adjust the import path as necessary

const JobCard = ({ title, jobs, bgColor, buttonColor }) => {
  return (
    <Card sx={{  height: '100%', }}>
      <Box sx={{ bgcolor: bgColor, }}>
        <Typography
          variant="h6"
          align="center"
          sx={{ color: '#fff', fontWeight: 'bold' }}
        >
          {title}
        </Typography>
      </Box>
      <CardContent sx={{ p: 2 }}>
        <Stack spacing={1.5}>
          {jobs.map((job, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{ color: '#003399', fontWeight: 500 }}
            >
              <ArrowForwardIcon sx={{ fontSize: 14, color: 'red', mr: 1 }} />
              {job}
            </Typography>
          ))}
        </Stack>
        <Box mt={4} textAlign="center">
          <Button
            variant="contained"
            sx={{
              bgcolor: buttonColor,
              borderRadius: 10,
              fontWeight: 'bold',
              '&:hover': { bgcolor: buttonColor },
              px: 4,
            }}
          >
            Read More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const HomeComponent = () => {


  const jobListGov = [
    'UP ITI Result 2025 2nd Merit List, Sarkari Result',
    'BHEL New Recruitment 2025, Artisan 515 Post Apply Online',
    'IB ACIO Recruitment 2025 – Apply Online, Syllabus, PDF Notification Last Date 3717 Post',
    'Heavy Vehicle Factory Recruitment 2025, Sarkari Result 1850 Post Apply',
    'NHPC Apprentice Recruitment 2025 – Notification Out 361 Post',
    'RRB Technician Recruitment 2025, 6238 Post, Last Date 27 July 2025',
    'BHEL ITI Apprentice Recruitment 2025, Sarkari Naukri',
    'Aai Airport Recruitment 2025, Diploma Graduate ITI New Vacancy Check 10th Class MP Bord Result 2025',
    '10th Result MP Board 2025 link – Check 10th Class MP Bord Result 2025',
    'RRB ALP Recruitment 2025 9970 Post, Date Apply Online From',
    'HAL Recruitment 2025, Technician, Operator Total 98 Post',
    'South Eastern Railway Apprentice Bharti 2025, 835 for Apprentice',
    'MPMRCL Recruitment 2025 , MP Metro Vacancy 2025 , MP Govt Job',
  ];

  const jobListPrivate = [
    'Maruti Suzuki FTE Recruitment 2025, ITI New Vacancy',
    'Maruti Suzuki CW Recruitment 2025, ITI New Vacancy',
    'Maruti Suzuki Apprentice Recruitment 2025, ITI New Vacancy',
    'Maruti Suzuki TW Recruitment 2025, ITI new vacancy',
    'Suzuki Motors Ltd Recruitment 2025 ITI new vacancy',
    'Hero Motorcrop Ltd Recruitment 2025, ITI New Vacancy,Mcleods Pharmaceuticals Recruitment 2025,Hero ',
    'Mcleods Pharmaceuticals Recruitment 2025, Pharma Jobs in India',
    'Aarti Industries Ltd New Vacancy 2025| ITI Diploma BSC MSC Pass',
    'Jindal Steel and Power Recruitment 2025, Best Job Openings',
    'UP Rojgar Mela 2025 Registration, 10th 12th ITI Diploma Graduate',
    'Sulzon Technology Ltd Recruitment 2025| Apply Online',
    'Tata Advance System Recruitment 2025, Diploma BE Btech Hiring',
    'Agi Greenpac Private Company Job Vacancy 2025',
    'New Holland Tractor Recruitment 2025, ITI New Vacancy',
  ];
  
const yojana = [
  'Aadhaar Supervisor Recruitment 2025 – Apply Online Notification Out',
  'BHEL New Recruitment 2025, Artisan 515 Post Apply Online',
  'New Business Idea 2025 – इस साल की सबसे अधिक चलने वाला बिजनेस आइडिया',
  'Heavy vehicle Factory Recruitment 2025, Sarkari Result 1850 Post Apply',
  'NHPC Apprentice Recruitment 2025 – Notification Out 361 Post',
  '10th Result MP Board 2025 link – Check 10th Class MP Bord Result 2025',
  'HAL Recruitment 2025, Technician, Operator Total 98 Post Last Date 18th April 2025, Apply Online',
   'Hero Motorcrop Ltd Recruitment 2025, ITI New Vacancy,Mcleods Pharmaceuticals Recruitment 2025,Hero ',
  'Eastern Railway RRC Recruitment 2024, ITI Apprentice',
  'Railway NTPC Recruitment 2024, 11558 Post Apply Online Application Start',
  'MPPGCL Recruitment 2024, Apprentice For ITI',
];
  const updates = [
  'Hero Motorcorp Ltd Recruitment 2025, ITI New Vacancy',
  'Maruti Suzuki CW Recruitment 2025, ITI New Vacancy',
  'Maruti Suzuki FTE Recruitment 2025, ITI New Vacancy',
  'RRC Western Railway Apprentices vacancy, ITI Apprentice',
  'Aadhaar Supervisor Recruitment 2025 – Apply Online Notification Out',
  'UP ITI Result 2025 2nd Merit List, Sarkari Result',
  'Maruti Suzuki Apprentice Recruitment 2025, ITI New Vacancy',
  'BHEL New Recruitment 2025, Artisan 515 Post Apply Online',
   'Aai Airport Recruitment 2025, Diploma Graduate ITI New Vacancy Check 10th Class MP Bord Result 2025',
  'IB ACIO Recruitment 2025 – Apply Online, Syllabus, PDF Notification Last Date 3717 Post Recruitment',
  'New Business Idea 2025 – इस साल की सबसे अधिक चलने वाला बिजनेस आइडिया',
  'Heavy Vehicle Factory Recruitment 2025, Sarkari Result 1850 Post Apply',
];



  return (
    <Box sx={{ minHeight: '100vh',marginTop:"80px" }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid item xs={12} md={6}>
          <JobCard
            title="Sarkari Job"
            jobs={jobListGov}
            bgColor="#d60000"
            buttonColor="#e60000"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <JobCard
            title="Private Job"
            jobs={jobListPrivate}
            bgColor="#c59b05"
            buttonColor="#009900"
          />
        </Grid>
      </Grid><br />
        <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid item xs={12} md={6}>
          <JobCard
            title="yojana"
            jobs={yojana}
            bgColor="#d60000"
            buttonColor="#e60000"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <JobCard
            title="Updates"
            jobs={updates}
            bgColor="#c59b05"
            buttonColor="#009900"
          />
        </Grid>
      </Grid>
      <BannerIntro/>
    </Box>
  );
};

export default HomeComponent;
