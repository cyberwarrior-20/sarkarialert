import React from 'react';
import { Box, Typography, Stack, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const BannerIntro = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        bgcolor: '#0000cc',
        color: 'white',
        textAlign: 'center',
        py: 2,
        px: 2,
      }}
    >
      <Typography variant={isMobile ? 'h6' : 'h5'} fontWeight="bold">
        My Sarkari Alert: Sarkari Job, Sarkari Exam Campus Placement job
      </Typography>

      {/* Buttons */}
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 2, flexWrap: 'wrap' }}
      >
        <Button variant="contained" color="primary" sx={{ borderRadius: 10 }}>
          💼 Employment website
        </Button>
        <Button variant="contained" color="primary" sx={{ borderRadius: 10 }}>
          ℹ Sarkari Naukri website
        </Button>
      </Stack>

      {/* Paragraph Section */}
      <Box sx={{ bgcolor: '#fff', color: '#003399', p: 3, mt: 2 }}>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <b>mysarkarialert.com</b> भारत की एक जानी- मानी सरकारी एवं प्राइवेट जॉब पोर्टल है।
          <b> mysarkarialert</b> भारत सरकार के सभी सरकारी एवं प्राइवेट संस्थान मे आने वाली सभी प्रकार की भर्ती की जानकारी प्रदान करता है।
        </Typography>

        <Typography variant="body1" sx={{ mb: 1 }}>
          भर्ती जैसे: <i>Railway Bharti, Police Bharti, Indian Army vacancy, Agni veer Bharti, NTPC Exam, Bank Job,
          Work from Home job, Private Job, Campus Placement, and ITI job, Diploma job, Graduate Job, Degree Job</i>, Sarkari Yojana, News Updates आदि
        </Typography>

        <Typography variant="body1" sx={{ mb: 1 }}>
          एवं सभी तरह की सरकारी एवं प्राइवेट संस्थान की नई भर्ती की जानकारी आप सभी को प्रदान करवाना ही हमारा एक मात्र लक्ष्य है ताकि आपको सभी जॉब्स की अपडेट्स इसी एक वेबसाइट पर मिल जाए।
        </Typography>

        <Typography variant="body1">
          <b>mysarkarialert</b> पर गवर्मेंट के विभागीय विज्ञापन के अनुसार सरकारी नौकरी उपलब्ध कराया जाता है जिसे हरेक महिला एवं पुरुष उम्मीदवार अपनी योग्यता के अनुसार आसानी से आवेदन कर सके।
        </Typography>
      </Box>
    </Box>
  );
};

export default BannerIntro;
