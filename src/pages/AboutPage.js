import React from "react";
import { Box, SvgIcon, Typography, Grid, Avatar, Button } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import scrollTo from "../component/scrollTo";

const aboutText = [
  "I'm a front-end developer in Taiwan. I love creating websites that are simple to use.",
  "I'm interested in the whole frontend stack and am starting to touch the backend as well and am working my way towards a full-stack developer.",
  "I believe that as long as you work hard, there is nothing you can't do.",
];

const AboutPage = () => {
  const theme = useTheme();
  const svgAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        height: "100%",
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: -1,
          "&::before": {
            content: '"ABOUT"',
            fontSize: { xs: "5rem", md: "10rem" },
            position: "absolute",
            top: 50,
            left: 100,
            color: alpha(theme.palette.text.disabled, 0.1),
          },
        }}
      />
      <Grid container sx={{ height: "100%" }}>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            height: { xs: "100%", md: "100vh" },
          }}
          component={motion.div}
          variants={svgAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <Box
            component={motion.img}
            src="assets/svg/about_coding.svg"
            sx={{ width: { xs: "90%", md: "600px" }, mt: { xs: 20, md: 0 } }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", justifyContent: "center", height: "100%" }}
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 2 } }}
            viewport={{ once: false }}
            sx={{
              width: { xs: "90%", lg: "80%" },
              my: { xs: "60px", md: "120px", lg: "100px" },
              height: "100%",
            }}
          >
            <Avatar
              src="assets/images/aboutPerson.png"
              sx={{
                width: 120,
                height: 120,
                background: theme.palette.primary.main,
              }}
            />
            <Box
              sx={{
                height: "3px",
                width: "100%",
                background: theme.palette.primary.main,
                my: 2,
              }}
            />
            <Box px={2}>
              {aboutText.map((text, index) => (
                <Typography
                  key={index}
                  mb={2}
                  sx={{
                    fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Box>
            <Button
              component="a"
              variant="contained"
              onClick={() => scrollTo("contact")}
              color="secondary"
              sx={{ m: 2 }}
              size="large"
            >
              Contact
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

function MessengerIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M 15 3 C 8.373 3 3 8.149 3 14.5 C 3 17.901215 4.5506695 20.947232 7 23.052734 L 7 28 L 11.835938 25.582031 C 12.845524 25.846308 13.903007 26 15 26 C 21.627 26 27 20.851 27 14.5 C 27 8.149 21.627 3 15 3 z M 13.861328 11.357422 L 16.8125 14.3125 L 22.083984 11.357422 L 16.138672 17.800781 L 13.255859 14.703125 L 7.8457031 17.730469 L 13.861328 11.357422 z"></path>
    </SvgIcon>
  );
}

function DiscordIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M25.12,6.946c-2.424-1.948-6.257-2.278-6.419-2.292c-0.256-0.022-0.499,0.123-0.604,0.357 c-0.004,0.008-0.218,0.629-0.425,1.228c2.817,0.493,4.731,1.587,4.833,1.647c0.478,0.278,0.638,0.891,0.359,1.368 C22.679,9.572,22.344,9.75,22,9.75c-0.171,0-0.343-0.043-0.501-0.135C21.471,9.598,18.663,8,15.002,8 C11.34,8,8.531,9.599,8.503,9.615C8.026,9.892,7.414,9.729,7.137,9.251C6.86,8.775,7.021,8.164,7.497,7.886 c0.102-0.06,2.023-1.158,4.848-1.65c-0.218-0.606-0.438-1.217-0.442-1.225c-0.105-0.235-0.348-0.383-0.604-0.357 c-0.162,0.013-3.995,0.343-6.451,2.318C3.564,8.158,1,15.092,1,21.087c0,0.106,0.027,0.209,0.08,0.301 c1.771,3.11,6.599,3.924,7.699,3.959c0.007,0.001,0.013,0.001,0.019,0.001c0.194,0,0.377-0.093,0.492-0.25l1.19-1.612 c-2.61-0.629-3.99-1.618-4.073-1.679c-0.444-0.327-0.54-0.953-0.213-1.398c0.326-0.443,0.95-0.541,1.394-0.216 C7.625,20.217,10.172,22,15,22c4.847,0,7.387-1.79,7.412-1.808c0.444-0.322,1.07-0.225,1.395,0.221 c0.324,0.444,0.23,1.066-0.212,1.392c-0.083,0.061-1.456,1.048-4.06,1.677l1.175,1.615c0.115,0.158,0.298,0.25,0.492,0.25 c0.007,0,0.013,0,0.019-0.001c1.101-0.035,5.929-0.849,7.699-3.959c0.053-0.092,0.08-0.195,0.08-0.301 C29,15.092,26.436,8.158,25.12,6.946z M11,19c-1.105,0-2-1.119-2-2.5S9.895,14,11,14s2,1.119,2,2.5S12.105,19,11,19z M19,19 c-1.105,0-2-1.119-2-2.5s0.895-2.5,2-2.5s2,1.119,2,2.5S20.105,19,19,19z"></path>
    </SvgIcon>
  );
}

export default AboutPage;
