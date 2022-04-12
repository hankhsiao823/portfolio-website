import React from "react";
import { Box, Typography, Grid, Avatar, Button } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import scrollTo from "../component/scrollTo";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const aboutText = [
    t("about.introduce.hello"),
    t("about.introduce.skill"),
    t("about.introduce.idea"),
  ]

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
              {t("about.button")}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutPage;
