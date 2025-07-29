import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Stack,

} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BannerIntro from './Bannerinfo';

const JobCard = ({ title, jobs, bgColor }) => {
  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: 500,
        height: '100%',
        flex: 1,
        m: 1,
      }}
    >
      <Box sx={{ bgcolor: bgColor }}>
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
              component="a"
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="body2"
              sx={{
                color: '#003399',
                fontWeight: 500,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              <ArrowForwardIcon sx={{ fontSize: 14, color: 'red', mr: 1 }} />
              {job.title}
            </Typography>
          ))}
        </Stack>
  
      </CardContent>
    </Card>
  );
};

const JobRow = ({ cards }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%',
        p: 1,
      }}
    >
      {cards.map((card, index) => (
        <JobCard
          key={index}
          title={card.title}
          jobs={card.jobs}
          bgColor={card.bgColor}
         
        />
      ))}
    </Box>
  );
};

const HomeComponent = () => {
  const jobListGov = [
    { title: 'UP ITI Result 2025 2nd Merit List, Sarkari Result', url: 'https://example.com/up-iti-result' },
    { title: 'BHEL New Recruitment 2025, Artisan 515 Post Apply Online', url: 'https://example.com/bhel-recruitment' },
    { title: 'IB ACIO Recruitment 2025 – Apply Online, Syllabus, PDF Notification Last Date 3717 Post', url: 'https://example.com/ib-acio' },
    { title: 'Heavy Vehicle Factory Recruitment 2025, Sarkari Result 1850 Post Apply', url: 'https://example.com/hvf' },
    { title: 'NHPC Apprentice Recruitment 2025 – Notification Out 361 Post', url: 'https://example.com/nhpc' },
    { title: 'RRB Technician Recruitment 2025, 6238 Post, Last Date 27 July 2025', url: 'https://example.com/rrb-tech' },
    { title: 'BHEL ITI Apprentice Recruitment 2025, Sarkari Naukri', url: 'https://example.com/bhel-iti' },
    { title: 'Aai Airport Recruitment 2025, Diploma Graduate ITI New Vacancy Check 10th Class MP Bord Result 2025', url: 'https://example.com/aai' },
    { title: '10th Result MP Board 2025 link – Check 10th Class MP Bord Result 2025', url: 'https://example.com/mp10' },
    { title: 'RRB ALP Recruitment 2025 9970 Post, Date Apply Online From', url: 'https://example.com/rrb-alp' },
    { title: 'HAL Recruitment 2025, Technician, Operator Total 98 Post', url: 'https://example.com/hal' },
    { title: 'South Eastern Railway Apprentice Bharti 2025, 835 for Apprentice', url: 'https://example.com/ser-apprentice' },
    { title: 'MPMRCL Recruitment 2025 , MP Metro Vacancy 2025 , MP Govt Job', url: 'https://example.com/mpmrcl' },
  ];

  const jobListPrivate = [
    { title: 'Maruti Suzuki FTE Recruitment 2025, ITI New Vacancy', url: 'https://example.com/maruti-fte' },
    { title: 'Maruti Suzuki CW Recruitment 2025, ITI New Vacancy', url: 'https://example.com/maruti-cw' },
    { title: 'Maruti Suzuki Apprentice Recruitment 2025, ITI New Vacancy', url: 'https://example.com/maruti-apprentice' },
    { title: 'Maruti Suzuki TW Recruitment 2025, ITI new vacancy', url: 'https://example.com/maruti-tw' },
    { title: 'Suzuki Motors Ltd Recruitment 2025 ITI new vacancy', url: 'https://example.com/suzuki' },
    { title: 'Hero Motorcrop Ltd Recruitment 2025, ITI New Vacancy,Mcleods Pharmaceuticals Recruitment 2025,Hero', url: 'https://example.com/hero' },
    { title: 'Mcleods Pharmaceuticals Recruitment 2025, Pharma Jobs in India', url: 'https://example.com/mcleods' },
    { title: 'Aarti Industries Ltd New Vacancy 2025| ITI Diploma BSC MSC Pass', url: 'https://example.com/aarti' },
    { title: 'Jindal Steel and Power Recruitment 2025, Best Job Openings', url: 'https://example.com/jindal' },
    { title: 'UP Rojgar Mela 2025 Registration, 10th 12th ITI Diploma Graduate', url: 'https://example.com/rojgar' },
    { title: 'Sulzon Technology Ltd Recruitment 2025| Apply Online', url: 'https://example.com/sulzon' },
    { title: 'Tata Advance System Recruitment 2025, Diploma BE Btech Hiring', url: 'https://example.com/tata' },
    { title: 'Agi Greenpac Private Company Job Vacancy 2025', url: 'https://example.com/agi' },
    { title: 'New Holland Tractor Recruitment 2025, ITI New Vacancy', url: 'https://example.com/new-holland' },
  ];

  const yojana = [
    { title: 'Aadhaar Supervisor Recruitment 2025 – Apply Online Notification Out', url: 'https://example.com/aadhaar' },
    { title: 'BHEL New Recruitment 2025, Artisan 515 Post Apply Online', url: 'https://example.com/bhel' },
    { title: 'New Business Idea 2025 – इस साल की सबसे अधिक चलने वाला बिजनेस आइडिया', url: 'https://example.com/idea' },
    { title: 'Heavy vehicle Factory Recruitment 2025, Sarkari Result 1850 Post Apply', url: 'https://example.com/hvf' },
    { title: 'NHPC Apprentice Recruitment 2025 – Notification Out 361 Post', url: 'https://example.com/nhpc' },
    { title: '10th Result MP Board 2025 link – Check 10th Class MP Bord Result 2025', url: 'https://example.com/mp10' },
    { title: 'HAL Recruitment 2025, Technician, Operator Total 98 Post Last Date 18th April 2025, Apply Online', url: 'https://example.com/hal' },
    { title: 'Hero Motorcrop Ltd Recruitment 2025, ITI New Vacancy,Mcleods Pharmaceuticals Recruitment 2025,Hero', url: 'https://example.com/hero' },
    { title: 'Eastern Railway RRC Recruitment 2024, ITI Apprentice', url: 'https://example.com/rrc-eastern' },
    { title: 'Railway NTPC Recruitment 2024, 11558 Post Apply Online Application Start', url: 'https://example.com/ntpc' },
    { title: 'MPPGCL Recruitment 2024, Apprentice For ITI', url: 'https://example.com/mppgcl' },
  ];

  const updates = [
    { title: 'Hero Motorcorp Ltd Recruitment 2025, ITI New Vacancy', url: 'https://example.com/hero' },
    { title: 'Maruti Suzuki CW Recruitment 2025, ITI New Vacancy', url: 'https://example.com/maruti-cw' },
    { title: 'Maruti Suzuki FTE Recruitment 2025, ITI New Vacancy', url: 'https://example.com/maruti-fte' },
    { title: 'RRC Western Railway Apprentices vacancy, ITI Apprentice', url: 'https://example.com/rrc-western' },
    { title: 'Aadhaar Supervisor Recruitment 2025 – Apply Online Notification Out', url: 'https://example.com/aadhaar' },
    { title: 'UP ITI Result 2025 2nd Merit List, Sarkari Result', url: 'https://example.com/up-iti-result' },
    { title: 'Maruti Suzuki Apprentice Recruitment 2025, ITI New Vacancy', url: 'https://example.com/maruti-apprentice' },
    { title: 'BHEL New Recruitment 2025, Artisan 515 Post Apply Online', url: 'https://example.com/bhel' },
    { title: 'Aai Airport Recruitment 2025, Diploma Graduate ITI New Vacancy Check 10th Class MP Bord Result 2025', url: 'https://example.com/aai' },
    { title: 'IB ACIO Recruitment 2025 – Apply Online, Syllabus, PDF Notification Last Date 3717 Post Recruitment', url: 'https://example.com/ib-acio' },
    { title: 'New Business Idea 2025 – इस साल की सबसे अधिक चलने वाला बिजनेस आइडिया', url: 'https://example.com/idea' },
    { title: 'Heavy Vehicle Factory Recruitment 2025, Sarkari Result 1850 Post Apply', url: 'https://example.com/hvf' },
  ];

  const campusJobs = [
    { title: 'Samsung India Ltd Campus 2025, ITI New Vacancy', url: 'https://example.com/samsung' },
    { title: 'JCB India Ltd Recruitment 2025, ITI New Vacancy', url: 'https://example.com/jcb' },
    { title: 'Maruti Suzuki FTE Recruitment 2025, ITI New Vacancy', url: 'https://example.com/maruti-fte' },
    { title: 'Hero Motocorp Ltd Hardiwar ITI Job Campus 2025, fast Job', url: 'https://example.com/hero-haridwar' },
    { title: 'Aarti Industries Ltd New Vacancy 2025 | ITI Diploma BSC MSC Pass', url: 'https://example.com/aarti' },
    { title: 'Suzuki Motors Ltd Recruitment 2025 | ITI New vacancy', url: 'https://example.com/suzuki' },
    { title: 'Jindal Steel And Power Recruitment 2025, ITI Latest Vacancy', url: 'https://example.com/jindal' },
    { title: 'Maruti Suzuki Apprentice Recruitment 2025, ITI New Vacancy', url: 'https://example.com/maruti-apprentice' },
    { title: 'Maruti Suzuki TW Recruitment 2025 | ITI New Vacancy', url: 'https://example.com/maruti-tw' },
    { title: 'Campus job Honda Motorcycles Ltd Recruitment, ITI New Vacancy', url: 'https://example.com/honda' },
    { title: 'Hero Motocrop Ltd Recruitment 2025, ITI New Vacancy', url: 'https://example.com/hero' },
    { title: 'Aai Airport Recruitment 2025, Diploma Graduate ITI New Vacancy Check 10th Class MP Bord Result 2025', url: 'https://example.com/aai' },
  ];

  return (
    <Box sx={{ minHeight: '100vh', mt: '80px' }}>
      <JobRow
        cards={[
          { title: 'Sarkari Job', jobs: jobListGov, bgColor: '#d60000'},
          { title: 'Private Job', jobs: jobListPrivate, bgColor: '#c59b05' },
        ]}
      />
      <JobRow
        cards={[
          { title: '10th,12th / Microfinance Jobs', jobs: yojana, bgColor: '#ff00c1' },
          { title: 'Sarkari Yojana', jobs: updates, bgColor: '#0255ba' },
        ]}
      />
      <JobRow
        cards={[
          { title: 'Campus Jobs', jobs: campusJobs, bgColor: '#ff00c1' },
          { title: 'Exam Results', jobs: updates, bgColor: '#0255ba' },
        ]}
      />
      <BannerIntro />
    </Box>
  );
};

export default HomeComponent;
