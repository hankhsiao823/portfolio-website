import React, { useState } from "react";
import { Box, Typography, keyframes } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { HandOne, HandTwo, HandThree } from "../component/beginSvgComponent";

const Applogospin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const applogo = {
  minWidth: { xs: "200px", sm: "250px" },
  minHeight: { xs: "200px", sm: "250px" },
  width: "100%",
  height: "100%",
  color: "#000000",
  pointerEvents: " none",
  animation: `${Applogospin} infinite 20s linear`,
};

const textAnimate = keyframes`
from {
  opacity: 0 ;
}
to {
  opacity: 1;
}
`;

const textStyle = {
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  pointerEvents: " none",
  animation: `${textAnimate} 1s infinite 4s ease`,
};

const pageHidden = {
  animate: {
    opacity: 0,
    pointerEvents: "none",
    transition: {
      delay: 2.5,
      duration: 0.8,
    },
  },
};
const show = {
  initial: {
    opacity: 0,
  },
  animate: (height) => ({
    opacity: 1,
    transition: {
      delay: height,
      duration: 0.8,
    },
  }),
};

const BeginPage = ({ setToggle }) => {
  const theme = useTheme();

  const [state, setState] = useState(false);

  function animateHandle() {
    setState(true);
    const intervalId = setInterval(() => {
      setToggle(true);
    }, 3000);
    return () => clearInterval(intervalId);
  }

  return (
    <Box
      component={motion.div}
      initial={false}
      variants={pageHidden}
      animate={state && "animate"}
      sx={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        background: theme.palette.background.default,
        zIndex: 100,
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <Box onClick={animateHandle} sx={{ position: "relative" }}>
        <Box component="img" src="assets/svg/logo.svg" sx={applogo} />
        <Typography sx={textStyle} display={state && "none"}>
          click here
        </Typography>
        <Box
          component={motion.div}
          initial="initial"
          custom={0.5}
          variants={show}
          animate={state && "animate"}
          sx={{
            position: "absolute",
            top: -200,
            left: -150,
            transform: "rotate(110deg)",
            width: "250px",
            height: "250px",
          }}
        >
          <HandTwo
            fill={theme.palette.primary.main}
            width="100%"
            height="100%"
          />
        </Box>
        <Box
          component={motion.div}
          initial="initial"
          custom={1}
          variants={show}
          animate={state && "animate"}
          sx={{
            position: "absolute",
            top: -170,
            right: -180,
            transform: "rotate(-100deg)",
            width: "250px",
            height: "250px",
          }}
        >
          <HandThree
            fill={theme.palette.primary.main}
            width="100%"
            height="100%"
          />
        </Box>
      </Box>
      <Box
        component={motion.div}
        initial="initial"
        custom={1.5}
        variants={show}
        animate={state && "animate"}
        sx={{
          position: "absolute",
          top: "70%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "250px",
          height: "250px",
        }}
      >
        <HandOne fill={theme.palette.primary.main} width="100%" height="100%" />
      </Box>
    </Box>
  );
};

export default BeginPage;
