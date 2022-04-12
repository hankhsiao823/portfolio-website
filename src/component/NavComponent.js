import React, { useState, useEffect } from "react";
import { useTheme, alpha } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import scrollTo from "./scrollTo";

function Nav() {
  const theme = useTheme();
  const [active, setActive] = useState();

  const nav_menu = {
    zIndex: 1,
    position: "fixed",
    bottom: "1rem",
    left: "50%",
    transform: "translate(-50%,0%)",
    backgroundColor: theme.palette.action.disabledBackground,
    width: { xs: "90%", sm: "40%", lg: "30%" },
    borderRadius: "4rem",
    padding: "0.75rem",
    backdropFilter: "blur(30px)",
  };

  const nav_list = {
    display: "flex",
    justifyContent: "space-between",
    alignItem: "center",
    listStyle: "none",
    m: 0,
    px: "1rem",
  };
  const nav_item = {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
  };
  const nav_link = {
    color: theme.palette.text.primary,
    display: "flex",
    borderRadius: "5rem",
    width: 40,
    height: 40,
    transition: "all 0.2s 3s linear",
  };

  const actice_link = {
    background: `linear-gradient(180deg,${alpha(
      theme.palette.secondary.main,
      1
    )},${alpha(theme.palette.secondary.main, 0.2)})`,
  };

  function actice_css(params) {
    return [nav_link, () => active === params && actice_link];
  }

  useEffect(() => {
    let sections = document.querySelectorAll("section[id]");
    let pageHeight = [];
    sections.forEach((curr, index) => {
      if (pageHeight[index - 1]) {
        pageHeight.push(curr.offsetHeight + pageHeight[index - 1]);
      } else {
        pageHeight.push(curr.offsetHeight);
      }
      index += 1;
    });

    // console.log(pageHeight);
    const handleScroll = () => {
      if (window.scrollY >= 0 && window.scrollY <= pageHeight[0] - 200) {
        setActive("home");
      } else if (
        window.scrollY > pageHeight[0] - 200 &&
        window.scrollY <= pageHeight[1] - 200
      ) {
        setActive("about");
      } else if (
        window.scrollY > pageHeight[1] - 200 &&
        window.scrollY <= pageHeight[2] - 200
      ) {
        setActive("skill");
      } else if (
        window.scrollY > pageHeight[2] - 200 &&
        window.scrollY <= pageHeight[3] - 50
      ) {
        setActive("works");
      } else {
        setActive("contact");
      }
    };
    handleScroll();
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box component="div" sx={nav_menu}>
      <Box sx={nav_list} component="ul">
        <Box sx={nav_item} component="li">
          <IconButton onClick={() => scrollTo("home")} sx={actice_css("home")}>
            <HomeIcon
              sx={{
                color: theme.palette.primary.main,
                filter: `drop-shadow(0 0 10px  ${alpha(
                  theme.palette.primary.main,
                  0.6
                )})`,
              }}
            />
          </IconButton>
        </Box>
        <Box sx={nav_item} component="li">
          <IconButton
            onClick={() => scrollTo("about")}
            sx={actice_css("about")}
          >
            <PersonIcon
              sx={{
                color: theme.palette.primary.main,
                filter: `drop-shadow(0 0 10px  ${alpha(
                  theme.palette.primary.main,
                  0.6
                )})`,
              }}
            />
          </IconButton>
        </Box>
        <Box sx={nav_item} component="li">
          <IconButton
            onClick={() => scrollTo("skill")}
            sx={actice_css("skill")}
          >
            <BadgeIcon
              sx={{
                color: theme.palette.primary.main,
                filter: `drop-shadow(0 0 10px  ${alpha(
                  theme.palette.primary.main,
                  0.6
                )})`,
              }}
            />
          </IconButton>
        </Box>
        <Box sx={nav_item} component="li">
          <IconButton
            onClick={() => scrollTo("works")}
            sx={actice_css("works")}
          >
            <WorkIcon
              sx={{
                color: theme.palette.primary.main,
                filter: `drop-shadow(0 0 10px  ${alpha(
                  theme.palette.primary.main,
                  0.6
                )})`,
              }}
            />
          </IconButton>
        </Box>
        <Box sx={nav_item} component="li">
          <IconButton
            onClick={() => scrollTo("contact")}
            sx={actice_css("contact")}
          >
            <MessageIcon
              sx={{
                color: theme.palette.primary.main,
                filter: `drop-shadow(0 0 10px  ${alpha(
                  theme.palette.primary.main,
                  0.6
                )})`,
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Nav;
