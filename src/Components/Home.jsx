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

const HomeComponent = () => {   //
  const jobListGov = [
    { title: ' IIFL Samasta Finance Ltd. में सीधी भर्ती | Collection Officer / Loan Recovery Officer की पोस्ट', url: 'http://localhost:3000/post/1' },
   
  ];

  const jobListPrivate = [
   { title: ' IIFL Samasta Finance Ltd. में सीधी भर्ती | Collection Officer / Loan Recovery Officer की पोस्ट', url: 'http://localhost:3000/post/1' },
  ];

  const yojana = [
   { title: ' IIFL Samasta Finance Ltd. में सीधी भर्ती | Collection Officer / Loan Recovery Officer की पोस्ट', url: 'http://localhost:3000/post/1' },
  ];

  const updates = [
    { title: ' IIFL Samasta Finance Ltd. में सीधी भर्ती | Collection Officer / Loan Recovery Officer की पोस्ट', url: 'http://localhost:3000/post/1' },
  ];

  const campusJobs = [
{ title: ' IIFL Samasta Finance Ltd. में सीधी भर्ती | Collection Officer / Loan Recovery Officer की पोस्ट', url: 'http://localhost:3000/post/1' },
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
