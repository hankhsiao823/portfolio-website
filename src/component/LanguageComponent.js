import { IconButton, Menu, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";
import { motion } from "framer-motion";

const languageAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
};

const LanguageComponent = () => {
  const { i18n } = useTranslation();

  const [lang, setLang] = useState(null);
  useEffect(() => {
    if (lang !== null) i18n.changeLanguage(lang);
  }, [lang, i18n]);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = (props) => {
    setLang(props);
    setAnchorEl(null);
  };

  return (
    <Box
      component={motion.div}
      variants={languageAnimation}
      initial="initial"
      animate="animate"
      sx={{ position: "absolute", top: 20, right: 80 }}
    >
      <IconButton onClick={handleClick}>
        <LanguageIcon sx={{ fontSize: "2rem" }} />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={() => handleClose("zh-TW")}>中文</MenuItem>
        <MenuItem onClick={() => handleClose("en-US")}>English</MenuItem>
      </Menu>
    </Box>
  );
};

export default LanguageComponent;
