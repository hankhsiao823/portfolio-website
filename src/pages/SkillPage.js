import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const skillArray = [
  {
    img: "assets/svg/html.svg",
    top: { xs: "150px", sm: "180px" },
    left: { xs: `calc(50% - 80px)`, sm: `calc(50% - 185px)` },
    name: "HTML",
  },
  {
    img: "assets/svg/css.svg",
    top: { xs: "150px", sm: "180px" },
    left: { xs: `calc(50% - 25px)`, sm: `calc(50% - 110px)` },
    name: "CSS",
  },
  {
    img: "assets/svg/javascript.svg",
    top: { xs: "150px", sm: "180px" },
    left: { xs: `calc(50% + 30px)`, sm: `calc(50% - 35px)` },
    name: "JS",
  },
  {
    img: "assets/svg/logo.svg",
    top: { xs: "150px", sm: "180px" },
    left: { xs: `calc(50% + 80px)`, sm: `calc(50% + 40px)` },
    name: "Reactjs",
  },
  {
    img: "assets/svg/nodejs.svg",

    top: { xs: "218px", sm: "280px" },
    left: { xs: `calc(50% - 80px)`, sm: `calc(50% - 185px)` },
    name: "Nodejs",
  },
  {
    img: "assets/svg/mongodb.svg",
    top: { xs: "218px", sm: "280px" },
    left: { xs: `calc(50% - 25px)`, sm: `calc(50% - 110px)` },
    name: "Mongodb",
  },
  // {
  //   img: "assets/svg/javascript.svg",
  //   top: "330px",
  //   left: `calc(50% - 35px)`,
  //   name: "HTML",
  // },
  // {
  //   img: "assets/svg/javascript.svg",
  //   top: "330px",
  //   left: `calc(50% + 40px)`,
  //   name: "HTML",
  // },
];

const uiArray = [
  {
    img: "assets/images/mui.png",
    top: { xs: "315px", sm: "410px" },
    left: { xs: `calc(50% - 80px)`, sm: `calc(50% - 185px)` },
    name: "MUI",
  },
  {
    img: "assets/svg/bootstrap.svg",
    top: { xs: "315px", sm: "410px" },
    left: { xs: `calc(50% - 25px)`, sm: `calc(50% - 110px)` },
    name: "Bootstrap",
  },
];

const toolsArray = [
  {
    img: "assets/svg/github.svg",
    top: { xs: "415px", sm: "540px" },
    left: { xs: `calc(50% - 80px)`, sm: `calc(50% - 185px)` },
    name: "Github",
  },
  {
    img: "assets/svg/vscode.svg",
    top: { xs: "415px", sm: "540px" },
    left: { xs: `calc(50% - 25px)`, sm: `calc(50% - 110px)` },
    name: "VScode",
  },
];

const SkillPage = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery("(min-width: 600px)");
  const { scrollYProgress } = useViewportScroll();

  const noHandOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.65, 0.75],
    [0, 1, 1, 0]
  );
  const noHandrotate = useTransform(scrollYProgress, [0.3, 0.4], [-90, 0]);
  const noHandScale = useTransform(scrollYProgress, [0.05, 0.4], [7, 1]);
  const noHandx = useTransform(scrollYProgress, [0.35, 0.4], [200, 0]);

  const handOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.55, 0.65, 0.75],
    [0, 1, 1, 0]
  );
  const handY = useTransform(scrollYProgress, [0.78, 0.8], [0, -50]);

  const skillOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.53, 0.65, 0.75],
    [0, 1, 1, 0]
  );
  const uiOpacity = useTransform(
    scrollYProgress,
    [0.56, 0.59, 0.65, 0.75],
    [0, 1, 1, 0]
  );
  const toolOpacity = useTransform(
    scrollYProgress,
    [0.62, 0.65, 0.73],
    [0, 1, 0]
  );

  const phoneAnimation = {
    initial: {
      x: 360,
      y: 1000,
    },
    animate: {
      x: isSmall ? -350 : -200,
      y: 0,
      transition: {
        duration: 1,
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <Box
      sx={{
        minHeight: "800vh",
        height: "100%",
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: -1,
          "&::before": {
            content: '"SKILL"',
            fontSize: { xs: "5rem", md: "10rem" },
            position: "absolute",
            top: 50,
            left: 100,
            color: alpha(theme.palette.text.disabled, 0.1),
          },
        }}
      />
      {/* ANCHOR image PhoneNoHand */}
      <Box
        component={motion.img}
        src="assets/images/skillPhoneNoHand.png"
        variants={phoneAnimation}
        initial="initial"
        animate="animate"
        style={{
          opacity: noHandOpacity,
          translateX: noHandx,
          translateY: handY,
          rotate: noHandrotate,
          scale: noHandScale,
        }}
        sx={{
          width: { xs: "500px", sm: "700px" },
          position: "fixed",
          top: "50px",
          transform: { xs: "translate(-40%,0%)", sm: "translate(-50%,0%)" },
          left: "50%",
          zIndex: -1,
        }}
      />
      {/* ANCHOR image PhoneHand */}
      <Box
        component={motion.img}
        src="assets/images/skillPhone.png"
        variants={phoneAnimation}
        initial="initial"
        animate="animate"
        style={{
          opacity: handOpacity,
          translateX: 0,
          translateY: handY,
          scale: 1,
        }}
        sx={{
          width: { xs: "500px", sm: "700px" },
          position: "fixed",
          top: "50px",
          transform: { xs: "translate(-40%,0%)", sm: "translate(-50%,0%)" },
          left: "50%",
          zIndex: -2,
        }}
      />
      {/* ANCHOR sjillIcon */}
      <Box component={motion.div} style={{ opacity: skillOpacity }}>
        <Typography
          sx={{
            position: "fixed",
            top: { xs: "120px", sm: "150px" },
            transform: "translate(-50%,0%)",
            left: { xs: `calc(50% - 70px)`, sm: `calc(50% - 170px)` },
            zIndex: -1,
            fontSize: { xs: "1rem", sm: "1.25rem" },
          }}
        >
          Language
        </Typography>
        {skillArray.map((data, index) => (
          <Box
            key={index}
            sx={{
              position: "fixed",
              top: data.top,
              left: data.left,
              transform: "translate(-50%,0%)",
              textAlign: "center",
            }}
          >
            <Box
              component="img"
              src={data.img}
              sx={{
                width: { xs: "40px", sm: "50px" },
                height: { xs: "40px", sm: "56px" },
              }}
            />
            <Typography sx={{ fontSize: { xs: "0.75rem", sm: "1rem" } }}>
              {data.name}
            </Typography>
          </Box>
        ))}
      </Box>
      {/* ANCHOR uiIcon */}
      <Box component={motion.div} style={{ opacity: uiOpacity }}>
        <Typography
          sx={{
            position: "fixed",
            top: { xs: "290px", sm: "380px" },
            transform: "translate(-50%,0%)",
            left: { xs: `calc(50% - 70px)`, sm: `calc(50% - 170px)` },
            zIndex: -1,
            fontSize: { xs: "1rem", sm: "1.25rem" },
          }}
        >
          UI library
        </Typography>
        {uiArray.map((data, index) => (
          <Box
            key={index}
            sx={{
              position: "fixed",
              top: data.top,
              left: data.left,
              transform: "translate(-50%,0%)",
              textAlign: "center",
            }}
          >
            <Box
              component="img"
              src={data.img}
              sx={{
                width: { xs: "40px", sm: "50px" },
                height: { xs: "40px", sm: "56px" },
              }}
            />
            <Typography sx={{ fontSize: { xs: "0.75rem", sm: "1rem" } }}>
              {data.name}
            </Typography>
          </Box>
        ))}
      </Box>
      {/* ANCHOR toolIcon */}
      <Box component={motion.div} style={{ opacity: toolOpacity }}>
        <Typography
          sx={{
            position: "fixed",
            top: { xs: "385px", sm: "510px" },
            transform: "translate(-50%,0%)",
            left: { xs: `calc(50% - 82px)`, sm: `calc(50% - 185px)` },
            zIndex: -1,
            fontSize: { xs: "1rem", sm: "1.25rem" },
          }}
        >
          Tools
        </Typography>
        {toolsArray.map((data, index) => (
          <Box
            key={index}
            sx={{
              position: "fixed",
              top: data.top,
              left: data.left,
              transform: "translate(-50%,0%)",
              textAlign: "center",
            }}
          >
            <Box
              component="img"
              src={data.img}
              sx={{
                width: { xs: "40px", sm: "50px" },
                height: { xs: "40px", sm: "56px" },
              }}
            />
            <Typography sx={{ fontSize: { xs: "0.75rem", sm: "1rem" } }}>
              {data.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SkillPage;
