import React from "react";
import {
  Box,
  Typography,
  Chip,
  Paper,
  Stack,

} from "@mui/material";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";

export default function AboutUs() {

  // Campus job Chip
  const campusJobChip = (
    <Chip
      icon={<BusinessCenterOutlinedIcon />}
      label="Campus job"
      color="primary"
      sx={{
        fontWeight: 500,
        ml: 1,
        mb: { xs: 1, sm: 0 },
      }}
    />
  );

  return (
    <Box
      sx={{
        px: { xs:2, sm: 4, md: 8 },
        py: { xs: 2, sm: 4 },
        maxWidth: 900,
        mx: "auto",
        mt: { xs: 4, sm: 6, md: 8 }, // adjust as desired
        fontFamily: "serif",
      }}
    >
      {/* About Us Title */}
      <Typography
        variant="h4"
        sx={{
          color: "#25325d",
          fontWeight: 700,
          mb: 3,
        }}
        component="h1"
      >
        About Us
      </Typography>

      {/* First Paragraph with chip */}
      <Typography sx={{ fontSize: "1.13rem", display: "flex", alignItems: "center", mb: 2 }}>
        Hello friends welcome to mysarkarialert.com official genuine
        sarkari job portal site.
        {campusJobChip}
      </Typography>

      {/* Main About paragraphs */}
      <Stack spacing={2} sx={{ mb: 2 }}>
        <Typography fontSize="1.1rem">
          We are daily regular job post updates for Professional jobs and career Platform. Here we will provide you only interesting and genuine content, which you will like very much.
        </Typography>
        <Typography fontSize="1.1rem">
          We’re dedicated to providing you the best of jobs and career, with a focus on dependability and jobs updates. Our About-us page was created with the help of all people.
        </Typography>
        <Typography fontSize="1.1rem">
          We’re working to turn our passion for jobs and career into a booming online website. We hope you enjoy our jobs and career as much as we enjoy offering them to you.
        </Typography>
        <Typography fontSize="1.1rem">
          I will keep posting more important posts on my Website for all of you. Please give your support and love.
        </Typography>
        <Typography fontSize="1.1rem">
          Thanks For Visiting Our my site.
        </Typography>
      </Stack>

      {/* Personal information */}
      <Paper
        elevation={2}
        sx={{
         
          p: { xs: 2, sm: 3 },
          borderRadius: 1,
          mt: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "#2a386a",
            mb: 2,
          }}
        >
          My personal information
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, mb: 1, color: "#495879", fontSize: "1.26rem" }}
        >
          Name :&nbsp;
          <Box component="span" sx={{ fontWeight: 600 }}>
            Raghu Yadav 

          </Box>
        </Typography>
        <Typography sx={{ mb: 1 }}>
          <Box component="span" sx={{ fontWeight: 600 }}>
            Email Id&nbsp;:
          </Box>
          &nbsp;raghuroy9058@gmail.com
        </Typography>
        <Typography sx={{ mb: 1 }}>
          <Box component="span" sx={{ fontWeight: 600 }}>
            My Address&nbsp;:
          </Box>
          &nbsp;Hathras Uttar Pradesh
        </Typography>
      </Paper>
    </Box>
  );
}
