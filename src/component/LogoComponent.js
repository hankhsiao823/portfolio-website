import { Typography } from "@mui/material";
import { Box, keyframes } from "@mui/system";
import { motion } from "framer-motion";
import React from "react";

const Logo = () => {
  const Applogospin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

  const applogo = {
    color: "#000000",
    pointerEvents: " none",
    animation: `${Applogospin} infinite 20s linear`,
    width: "40px",
    height: "40px",
  };

  const logoAnimation = {
    initial: { x: -200 },
    animate: {
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <Box
      component={motion.div}
      variants={logoAnimation}
      initial="initial"
      animate="animate"
      sx={{ position: "absolute", top: 20, left: 20, display: "flex" }}
    >
      <Typography variant="h4">HH</Typography>
      <Box component="img" src="assets/svg/logo.svg" sx={applogo} />
    </Box>
  );
};

export default Logo;
