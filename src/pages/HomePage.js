import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, keyframes } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import scrollTo from "../component/scrollTo";

const homelogo = [
  "assets/images/homelogoblack.png",
  "assets/images/homelogowhite.png",
];

const Hlogos = keyframes`
  0%{
    transform: rotate(-2deg);
  }
  50% {
    transform: rotate(2deg);
  }
  100% {
    transform: rotate(-2deg);
  }
`;

const moveDown = keyframes`
  50%{
    opacity:0.5;
  }
  100% {
    transform: translateY(1.5rem);
    opacity:0;
  }
`;

const HomePage = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const titlebox = [
    t("home.title.hello"),
    t("home.title.name"),
    t("home.title.skill"),
  ];


  const letterAnimation = React.useMemo(() => {
    return titlebox.map((title, index) => (
      <Box sx={{ mt: { xs: index === 0 ? 5 : 0, sm: 0 } }} key={index}>
        {[...title].map((letter, letterIndex) => {
          let delayTime;
          if (index === 0) {
            delayTime = letterIndex / 10;
          } else if (index === 1) {
            delayTime = (titlebox[0].length + 1 + letterIndex) / 10;
          } else {
            delayTime =
              (titlebox[0].length + titlebox[1].length + 1 + letterIndex) / 10;
          }
          return (
            <Typography
              key={letterIndex}
              component={motion.div}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: [0, 0.3, 0.6, 1],
                transition: {
                  delay: delayTime,
                  ease: [0.6, 0.01, -0.05, 0.6],
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              variant={index === 0 ? "h1" : index === 1 ? "h2" : "h3"}
              sx={{
                display: "inline-block",
                whiteSpace: "pre",
                fontSize: {
                  xs: index === 0 ? "2rem" : index === 1 ? "1.75rem" : "1rem",
                  sm: index === 0 ? "6rem" : index === 1 ? "3.75rem" : "3rem",
                },
              }}
            >
           {letter.split(" ").join(" ")}
            </Typography>
          );
        })}
      </Box>
    ));
  }, [titlebox]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "center", md: "space-around" },
        alignItems: "center",
        flexDirection: { xs: "column-reverse", md: "row" },
        height: "100vh",
      }}
    >
      <Box sx={{ mb: { xs: 10, sm: 0 } }}>{letterAnimation}</Box>
      <Box
        component={motion.img}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            delay: 5.5,
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
        alt="logo"
        src={theme.palette.mode === "light" ? homelogo[0] : homelogo[1]}
        sx={{
          width: { xs: 250, sm: 300, md: 320, lg: 600 },
          height: { xs: 250, sm: 300, md: 320, lg: 600 },
          animation: `${Hlogos} infinite 5s linear`,
        }}
      />
      <Box
        component="a"
        onClick={()=>scrollTo("about")}
        sx={{
          position: "absolute",
          height: "3rem",
          width: "2rem",
          border: `0.3rem solid ${theme.palette.primary.main}`,
          margin: "auto",
          left: 0,
          right: 0,
          bottom: "7rem",
          borderRadius: "4rem",
          animation: `${moveDown}  infinite 2s`,
          "&::before": {
            position: "absolute",
            content: "''",
            margin: "auto",
            top: "0.2rem",
            left: 0,
            right: 0,
            height: "0.5rem",
            width: "0.5rem",
            borderRadius: "50%",
            background: theme.palette.primary.main,
            animation: `${moveDown}  infinite 2s`,
          },
        }}
      />
    </Box>
  );
};

export default HomePage;
