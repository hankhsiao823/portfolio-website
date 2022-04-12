import React, { useContext } from "react";
import { ColorModeContext } from "../ThemeProvider";
import { IconButton, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { motion } from "framer-motion";

const Darkmode = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const darkModeAnimation = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
  };

  return (
    <Box
      component={motion.div}
      variants={darkModeAnimation}
      initial="initial"
      animate="animate"
      sx={{ position: "absolute", top: 20, right: 20 }}
    >
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon sx={{ fontSize: "2rem" }} />
        ) : (
          <Brightness4Icon sx={{ fontSize: "2rem" }} />
        )}
      </IconButton>
    </Box>
  );
};

export default Darkmode;
